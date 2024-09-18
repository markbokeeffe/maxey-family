import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="maxeyFamily" title="The Maxey Family">
        <Image
            src="/gladstone_street.jpg"
            alt="Gladstone Street"
            caption="Johnson Street (now Gladstone Street) in Clonmel, where William Maxey had his business"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: 'darkred' }} className="font-bold">The Maxey Family was a well-known family that lived on what was then known as Johnson Street (now Gladstone Street) in Clonmel in the mid-nineteenth century.</span></p>
          <p>William Maxey was a publican during the 1840s and 1850s who had his premises at 11 Johnson Street and he was married to Bridget Kelly.  William was quite prominent in Clonmel and was listed as a voter for the town.  He also held the occuptation of cooper, which his sons would follow him into.</p>
          <Image
            src="/wmmaxey_business.png"
            alt="William Maxey business"
            caption="William Maxey&#39;s business listed in Griffith&#39;s Valuation"
            className="mt-4"
            float="right"
            width={300}
            height={24}
          /> 
          <p>William was born around 1799 and he married Bridget Kelly some time before 1833.  Together, they had at least five children:</p>
          <ul>
            <li>- William (1833 -)</li>
            <li>- James (1835 -)</li>
            <li>- Timothy William (1837 - 1896)</li>
            <li>- Joseph (1843 -)</li>
            <li>- Mary Anne (1844 - 1895)</li>
          </ul>
          <p>Some time between the 1850s and the mid-1860s, William Maxey fell on hard times.  When his son, Joseph, was imprisoned in 1866-67, pleas for his release were made on the basis that his family had fallen into destitution, including his father William, who was dependent upon him.</p>
          <Image
            src="/williamMaxeyPlea.png"
            alt="William Maxey Plea"
            caption="A plea for the release from prison of William&#39;s son Joseph, citing William&#39;s age and dependence upon him."
            className="mt-4"
            width={400}
            height={24}
          />
          <p>Whilst these pleas fell upon deaf ears, William passed away in the workhouse in Clonmel at the age of 67 from a bladder infection.  Bridget outlived Wililam.  However, it is known when she died.</p>
        </ContentPage>
    </>;
  }