import ContentPage from '../components/Page';
import Image from 'next/image';

export default function Page() {
    return <>
            <ContentPage id="mapplethorpe" title='Robert Mapplethorpe'>
            <Image
            src='/robert_mapplethorpe.png'
            alt='Robert Mapplethorpe'
            className='dark:invert border-4 border-black lg:float-left lg:mr-4'
            width={300}
            height={24}
            priority
          />
          <p><span style={{ color: 'darkred' }} className="font-bold">Robert Mapplethorpe was born in Queens, New York, in 1946 to Henry Irving Mapplethorpe and Joan Dorothy Maxey.</span></p>
          <p>Robert&#39;s mother, Joan Maxey (1920 - 1989), was a daughter of James Maxey (1889 - 1958) of New York.  James&#39; father was Michael Maxey (1864 - 1932) of Clonmel, Co. Tipperary.  Michael was a son of Timothy Maxey, the Clonmel Fenian who was exiled to the USA with his wife and children following his release from prison in 1867.</p>  
          <p>Robert Mapplethorpe studied Graphic Arts in the Pratt Institute in Brooklyn.  Whilst living with his girlfirend, Patti Smith, in New York in the late 1960s.  He initally specialised in polaroid photography before focusing of portraiture of friends and acquaintances.</p>
          <p>Through the 1970s, Robert achieved growing internatoinal attention and success.  He photographed names such as Andy Warhol, Patti Smith and David Hockney.</p>
          <p>In 1989, Robert died in a Boston hospital from AIDS and was buried in his mother&#39;s family grave in New York, under the name &#39;Maxey&#39;.</p>
          <Image
                src='/mapplethorpe_grave.png'
                alt='Robert Mapplethorpe grave, New York'
                className='dark:invert border-4 border-black opacity-100 z-10 mt-10 lg:float-right lg:ml-4'
                width={300}
                height={24}
                priority
              />
          
          <p>Robert&#39;s work would be displayed in many locations internationally, including the Getty Museum and the Guggenheim Museum.  In 2010, Robert&#39;s former girlfriend, Patti Smith, published a best-selling memoir about them called &#39;Just Kids&#39;, which won the National Book Award for Nonfiction.</p>
          <p>Following his death, Robert&#39;s brother, who went by the name Ed Maxey, continued his older brother&#39;s artistic journey and marked out his own path in the world of photography.</p>
   
            </ContentPage>
    </>;
  }