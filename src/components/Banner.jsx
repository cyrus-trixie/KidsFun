import bannerImg from "../assets/banne.avif";
export default function Banner (props){
    return (
        <>
         <div
                id="banner"
                className="flex items-center h-screen p-10 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bannerImg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  paddingTop: '60px',
                }}
              >
                <section className="flex flex-col space-y-4 text-left max-w-2xl">
                  <h1
                    className="text-3xl md:text-6xl text-green-800 font-bold"
                    style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)' }}
                  >
                   {props.H1} <br />
                    {props.H2}<br />
                     {props.H3}
                  </h1>
                  <h2
                    className="text-sm md:text-base text-gray-600 mb-6"
                    style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)' }}
                  >
                   {props.P1} <br />
                  {props.P2} <br />
                   {props.P3}
                  </h2>
                </section>
              </div>
        
        </>
    );
}