import Image from "next/image";
import { ItemText } from "./components/ItemText";

export default function Home() {
  return (
    <div>
      <div style={{paddingTop: 150}} className='logo-bg flex items-center flex-col w-full justify-center p-9'>
        <Image src="newton.svg" width={600} height={70} alt="newton^2 logo" className="newton"/>
        <h1 className="ntext text-center p-0 m-0 text-9xl text-white">XDSA</h1>
        <p className='stitle text-white'>A Newton² Project</p>
      </div>



      <div className="lg:px-40 md:px-28 px-9 py-9 grid lg:grid-cols-2 md:grid-cols-1  gap-4">
        <ItemText title="Scouting, simplified.">
          NewtonXDSA uses its custom game specific views, and a powerful dynamic form engine to provide an intuitive way to input data for new and old scouters alike.
        </ItemText>

        <ItemText title="Reliable. Powerful. Extensible.">
          XDSA was built from the ground up for scouting, and, using MySQL, it provides a datasource which is great for data analysis, and can take advantage of tools such as Tableau.
        </ItemText>

        <ItemText title="Newton²'s Laws">
          NewtonXDSA is built on the famed scouting apps of last year, and as such, it has the quality and reliaibility you would expect from a Newton² product!
        </ItemText>

        <ItemText title="Documentation Done Right">
          The NewtonXDSA API will be completely documented and open to the public for reading data! Input functions are documented, however they will not be usable without authorization, as we don't want anyone messing up the datasource.
        </ItemText>
      </div>

    </div>
  );
}
