import Navigation from '../components/Navigation';
import ContentPage from '../components/Page';
import Image from 'next/image';

export default function Page() {
    return <>
          <Navigation active='timothyMaxey'/>
          <ContentPage title='Timothy Maxey'>
            <Image
            src='/timothy_maxey_prison_file.png'
            alt='Timothy Maxey Prison File'
            className='dark:invert border-4 border-black lg:float-left lg:mr-4'
            width={300}
            height={24}
            priority
          />
          <p><strong>Timothy Maxey was born in Clonmel, Co. Tipperary around 1837 to William Maxey (a publican) and Bridget Maxey n&eacute;e Kelly.</strong></p>
          <p>He worked as a cooper - a popular trade in Clonmel at the time.  In 1860, he married Catherine Healy from Clonmel.  Together, they would have at least six children:</p>
          <ul>
            <li>- John (1861 -)</li>
            <li>- Patrick (1863 -)</li>
            <li>- Michael (1864 -)</li>
            <li>- Timothy (1866 -)</li>
            <li>- Jennie (1870 -)</li>
            <li>- Mary (1873-)</li>
          </ul>
          <p>Timothy became active in the growing secret society, the Irish Republican Brotherhood (IRB), in the early 1860s and in 1865, succeeded to the position of Clonmel Centre.</p>
          <p>In late 1865 and early 1866, Timothy was working with the movement in Carrick-on-Suir to attain sympathisers in the British military, with a view to take control of arms from British military stores in the event of a Fenian uprising.  However, Timothy and the group of Carrick-on-Suir Fenians were infiltrated by an undercover police detective, who exposed their conspiracy.  They were all duly arrested and imprisoned.</p>

          <p>Despite pleas for release, Timothy was held for 15 months and it was not until July 1867 that he was eventually released on condition that he sail to America and never return.  He was accompanied by his family to New York.  Subsequently, he moved to the city of St. Louis, Missouri in the mid-1870s, where he ultimately settled.  There, he became involved in an Irish Republican movement by joining the committee of the 'Sarsfield Circle' of the Fenian Brotherhood of St. Louis.  From there, he and his colleagues would send messages of support to the IRB in Ireland via the national newspapers.</p>
          <p>At a time when the famine generation in Ireland was coming of age, there was a growing republican movement in Ireland</p>

          <p>In 1896, Timothy suffered an accident when he fell from a porch in the McLean Building in St. Louis, receiving internal injuries.  He died several days later from those injuries in the City Hospital in St. Louis.  He was subsequently buried in Calvary Cemetery in that city. </p>
          <Image
                src='/mclean_building.png'
                alt='McLean Building, St. Louis, MO'
                className='dark:invert border-4 border-black opacity-100 z-10 mt-10 lg:float-right lg:ml-4'
                width={300}
                height={24}
                priority
              />
          <p>Timothy's family remained in the USA and they went on to have their own children and grandchildren.  One his descentdants became one of the most iconic photographers of the twentieth century.</p>
          <p>Timothy's son, Michael Maxey (1864 - 1932), married Sarah E. Hogan, and their son, James Michael Maxey (1889 - 1958), would have daughter called Joan Dorothy Maxey (1920 - 1989).</p>
          <p>In 1942, Joan Maxey married Henry Inving Mapplethorpe in New York City.  In 1989, Joan gave birth to Robert Mapplethorpe (Timothy's great great gradnson).</p>
          <p>Robert Mapplethorpe (1946 - 1989) is widely regarded as one of America's most iconic cultural figures of the twentieth century.</p>


            </ContentPage>
    </>;
  }