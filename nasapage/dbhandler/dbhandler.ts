import { XDSADatapoint, XDSAType } from "../8592sdk/types/";
import mariadb from "mariadb"
import { DatabaseConnection } from "../configurations/xdsa_config";

const pool = mariadb.createPool({
    host: DatabaseConnection.host,
    user: DatabaseConnection.user,
    password: DatabaseConnection.password,
});

let titles = "id,"

export async function upsertMatch(datapoints: XDSADatapoint[], data: Object) {



    
    // @ts-ignore
    let datas = `'${data.id}',`

    if (titles == "id,") {
        for (let datapoint of datapoints) {
            titles += `${datapoint.name},`
        }
        titles = titles.substring(0, titles.length - 1)
    }

    for (let item of Object.entries(data)) {
        const associated_point = datapoints.find(i => i.name == item[0])
        if (associated_point) {

            switch (associated_point.type) {

                case XDSAType.STRING:
                    datas += `'${item[1]}',`
                    break;
                
                case XDSAType.INTEGER || XDSAType.FLOAT:
                    datas += `${item[1]},`
                    break;

                case XDSAType.BOOLEAN:
                    datas += `${item[1] ? 1 : 0},`
                    break;

            }

        }
    }
    datas = datas.substring(0, datas.length-1)

    console.log(titles)
    console.log(datas)

    let connection;
    try {
        
        connection = await pool.getConnection()
        // await connection.changeUser({database: DatabaseConnection.database})
        await connection.execute(
            `
                REPLACE INTO ${DatabaseConnection.database}.MatchEntries (${titles}) VALUES (${datas});
            `
        )
        console.log("3")

    }

    catch (error){
        throw (error);
    }

    finally {
        if (connection) {
            await connection.end()
        }
    }

}

export async function pullFromMatchesTable(condition?: {property: string, value: any}) {

    let connection;
    try {
        
        connection = await pool.getConnection()

        let output

        //this is very insecure!!! do not expose this externally ever!!!!
        // -- message from Aryan Tadepalli to ANY FUTURE MAINTAINERS
        // -- including ones not on Newton^2, if XDSA2 even gets that far
        output = await connection.query(
            `
                SELECT * FROM ${DatabaseConnection.database}.MatchEntries ${condition ? `WHERE ${condition.property} = ?` : ""}
            `,
            [condition?.value]
        ) 
        
        return output

    }

    catch (error){
        throw (error);
    }

    finally {
        if (connection) {
            await connection.end()
        }
    }

}



export async function buildMariaDBTables(datapoints: XDSADatapoint[]) {

    function generateSQL() {
                        
        let str = ""

        for (let datapoint of datapoints) {

            let selected_type = ""

            switch (datapoint.type) {

                case (XDSAType.STRING):
                    selected_type = `VARCHAR(191) DEFAULT '${datapoint.default != undefined ? datapoint.default : ""}'`
                    break
    
                case (XDSAType.INTEGER):
                    selected_type = `INT DEFAULT ${datapoint.default != undefined ? datapoint.default : 0}`
                    break
                
                case (XDSAType.FLOAT):
                    selected_type = `FLOAT DEFAULT ${datapoint.default != undefined ? datapoint.default : 0}`
                    break

                case (XDSAType.BOOLEAN):
                    selected_type = `BOOLEAN DEFAULT ${datapoint.default != undefined ? (datapoint.default ? "TRUE" : "FALSE") : "FALSE"}`
                    break
    
            }

            


            str += `${datapoint.name} ${selected_type} NOT NULL,`
        }

        return str
    }


    let connection;

    try {

        connection = await pool.getConnection()
        await connection.execute(`CREATE DATABASE IF NOT EXISTS ${DatabaseConnection.database};`)
        await connection.execute(`USE ${DatabaseConnection.database};`)
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS MatchEntries (
            
                id VARCHAR(36) PRIMARY KEY NOT NULL,

                ${generateSQL()}

                updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                created DATETIME DEFAULT CURRENT_TIMESTAMP

            );
        `)

        console.log("データーベスが初期化しました！")

    }
    catch (err) {
        console.log("データーベスが初期化しませんでした。")
        throw err;
    }
    finally {
        if (connection) {
            await connection.end();
        }
    }

    

}

export async function refreshMariaDBTables(datapoints: XDSADatapoint[]) {

    function generateSQL() {
                        
        let str = ""

        for (let datapoint of datapoints) {

            let selected_type = ""

            switch (datapoint.type) {

                case (XDSAType.STRING):
                    selected_type = `VARCHAR(191) DEFAULT '${datapoint.default != undefined ? datapoint.default : ""}'`
                    break
    
                case (XDSAType.INTEGER):
                    selected_type = `INT DEFAULT ${datapoint.default != undefined ? datapoint.default : 0}`
                    break
                
                case (XDSAType.FLOAT):
                    selected_type = `FLOAT DEFAULT ${datapoint.default != undefined ? datapoint.default : 0}`
                    break

                case (XDSAType.BOOLEAN):
                    selected_type = `BOOLEAN DEFAULT ${datapoint.default != undefined ? (datapoint.default ? "TRUE" : "FALSE") : "FALSE"}`
                    break
    
            }

            


            str += `${datapoint.name} ${selected_type} NOT NULL,`
        }

        return str
    }


    let connection;

    try {

        connection = await pool.getConnection()
        await connection.execute(`DROP DATABASE IF EXISTS ${DatabaseConnection.database}`)
        await connection.execute(`CREATE DATABASE IF NOT EXISTS ${DatabaseConnection.database};`)
        await connection.execute(`USE ${DatabaseConnection.database};`)
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS MatchEntries (
            
                id VARCHAR(36) PRIMARY KEY NOT NULL,

                ${generateSQL()}

                updated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                created DATETIME DEFAULT CURRENT_TIMESTAMP

            );
        `)

        console.log("データーベスが初期化しました！")

    }
    catch (err) {
        console.log("データーベスが初期化しませんでした。")
        throw err;
    }
    finally {
        if (connection) {
            await connection.end();
        }
    }

    

}