export type ThemeColors = {
    main: Color,
    sub: Color,
    rule: Color,

    fg: Color,
    mg: Color,
    bg: Color,

    acc: Color
}

export class Color {
    r: number
    g: number
    b: number
    a: number

    constructor(r: number,g:number,b:number,a: number) {

        this.r = r
        this.g = g
        this.b = b
        this.a = a

    }

    rgba() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }

    static fromHex(color: string) {

        let val = color.replace(/^#/, '');
        

        return new Color(parseInt(val.substring(0, 2), 16), parseInt(val.substring(2, 4), 16), parseInt(val.substring(4, 6), 16), 1)

    }

}

export type Theme = {
    light: ThemeColors,
    dark: ThemeColors
}

export const basetheme: Theme = {
    light: {
        main: new Color(16,16,16,1),
        sub: new Color(161,161,161,1),
        mg: new Color(238,238,238,1),
        fg: new Color(255,255,255,1),
        bg: new Color(244,244,244,1),
        rule: new Color(240,240,240,1),
        acc: Color.fromHex("#0093b0"),
    },
    dark: {
        main: new Color(255,255,255,1),
        sub: new Color(70,70,70,1),
        fg: new Color(48,48,48,1),
        mg: new Color(18,18,18,1),
        bg: new Color(20,20,20,1),
        rule: new Color(70,70,70,1),
        acc: Color.fromHex("#0093b0"),

    }
}