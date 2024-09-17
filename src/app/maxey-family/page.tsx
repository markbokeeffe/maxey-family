import Navigation from '../components/Navigation';
import ContentPage from '../components/Page';
import Image from "next/image";

export default function Page() {
    return <>
        <Navigation active="maxeyFamily" />
        <ContentPage title="The Maxey Family">
        <Image
            src="/gladstone_street.jpg"
            alt="Gladstone Street"
            className="dark:invert border-4 border-black lg:float-left lg:mr-4"
            width={300}
            height={24}
            priority
          /> 
          <p><strong>The Maxey Family was a well-known family that lived on what was then known as Johnson Street (now Gladstone Street) in Clonmel in the mid-nineteenth century.</strong></p>
          <p>William Maxey was a publican during the 1840s and 1850s who had his premises at 11 Johnson Street and he was married to Bridget Kelly.  William was quite prominent in Clonmel and was listed as a voter for the town.  He also held the occuptation of cooper, which his sons would follow him into.</p>
          <p>William was born around 1799 and he married Bridget Kelly some time before 1833.  Together, they had at least five children:</p>
          <ul>
            <li>- William (1833 -)</li>
            <li>- James (1835 -)</li>
            <li>- Timothy William (1837 - 1896)</li>
            <li>- Joseph (1843 -)</li>
            <li>- Mary Anne (1844 - 1895)</li>
          </ul>
          <p>Some time between the 1850s and the mid-1860s, William Maxey fell on hard times.  When his son, Joseph, was imprisoned in 1866-67, pleas for his release were made on the basis that his family had fallen into destitution, including his father William, who was dependent upon him.  Whilst these pleas fell upon deaf ears, William passed away in the workhouse in Clonmel at the age of 67 from a bladder infection.  Bridget outlived Wililam.  However, it is known when she died.</p>
        </ContentPage>
    </>;
  }