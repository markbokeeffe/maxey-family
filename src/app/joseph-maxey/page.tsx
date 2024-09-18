import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage title='Joseph Maxey' id="josephMaxey">
          <Image
            src='/joseph_maxey.jpg'
            alt='Joseph Maxey'
            caption="Joseph Maxey photographed after his arrest in 1866"
            width={300}
            height={24}
          />
          <p><span style={{ color: 'darkred' }} className="font-bold">Joseph Maxey was born in Clonmel, Co. Tipperary around 1843 to the publican William Maxey and Bridget Maxey n&eacute;e Kelly.</span></p>
          <p>Joseph worked as a cooper, following his brother Timothy into the same trade.  In his work, he attained a level of prominence.  In 1866, he was President of the Coopers&#39; Association of Clonmel.  In 1862, he married Ellen Delaney, a native of Clonmel.</p>
          
          <span className="subtitle">Rebel</span>

          <p>Joseph appears to have had a rebellious streak, having got into trouble on a number of occasions for expressing an anti-British sentiment.  In May 1866, he was charged for &#39;singing treasonable songs and proposing treasonable toasts&#39;, which intended &#39;to usurp the Queen&#39;s authority in Ireland.&#39;</p>

            <p>By December of that year, things would take a dramatic twist for Joseph when he was arrested on the 17th day of that month on suspicion of being a centre in the IRB.  This arrest was carried out under the Habeus Corpus Suspension Act, which allowed for the British authorities to detain suspects for indefinite periods without trial.  This was enacted in the context of the growing threat of Fenian rebellion in Ireland at that time.  Many others would be detained under the same circumstances.</p>
            
            <span className="subtitle">Imprisonment</span>

            <p>Joseph was held in Clonmel Gaol.  Over the subsequent months, there would be numberous pleas from various individuals for the release of Joseph from custody.  Many of these centred on the fact that his wife and children was entering destitution.  One such plea stated that his father, William, who was dependent upon him, was very ill.  Indeed, on 28 April 1867, William would pass away in the workhouse in Clonmel.</p>
            <Image
                src='/joseph_maxey_detainment.png'
                alt='Joseph Maxey detainment decision'
                className='mt-10'
                caption="A pleas for Joseph&#39;s release in Feburary 1867"
                width={300}
                float="right"
                height={24}
              />
            
            <p>Joseph&#39;s imprisonment continued on into the summer and conditions in the gaol were very difficult.  Following the failed IRB uprising in Tallaght and elsewhere in the spring 1867, the British authorities deemed the threat that had been posed by the Fenian movement in Ireland to have reduced significantly and on this basis, in July 1867, they agreed to the release from prison of Joseph Maxey and he was freed on the 17th of that month.</p>
            
            <span className="subtitle">Release</span>
            <p>Following his release, Joseph returned to his family and they lived on Queen Street and later on Blind Street (now Kickham Street.  In 1875, Ellen passed away at the age of 36.  Subsequently, in 1877, Joseph married Mary Anne Hennessy, from Campile in Co. Wexford.  They would live on Blind Street before later moving to 18 King Street, where they would continue to live for the remainder of their lives.</p>
            
            
            <span className="subtitle">Family</span>
            <p>Joseph had a large number of children, including the following:</p>
              <ul>
                <li>- Mary (1865 - 1866)</li>
                <li>- Bridget (1869 - 1950)</li>
                <li>- Catherine (1870 - ?)</li>
                <li>- William (1871 - 1872)</li>
                <li>- Joseph (1873 - 1875)</li>
                <li>- James (1878 - 1901)</li>
                <li>- Mary (1880 - 1959)</li>
                <li>- Ellen (1882 - 1956)</li>
                <li>- Catherine (1884 - ?)</li>
                <li>- Joseph Nicholas (1886 - 1956)</li>
                <li>- Margaret (1888 - 1974)</li>
              </ul>

              <Image
                src='/ellen_maxey.png'
                alt='Ellen Maxey'
                className='mt-10'
                caption="Joseph&#39;s daughter, Ellen Maxey"
                width={261}
                height={24}
              />
              <Image
                src='/kate_maxey.png'
                alt='Kate Maxey'
                className='mt-10'
                caption="Joseph&#39;s daughter, Kate Maxey"
                width={281}
                height={24}
                clear={false}
              />
              <Image
                src='/margaret_maxey.png'
                alt='Margaret Maxey'
                className='mt-10'
                caption="Joseph&#39;s daughter, Margaret Maxey"
                width={300}
                height={24}
                clear={false}
              />
            <p style={{ float: "left" }}>Joseph died on 6 May 1913 from bronchitis.  He predeceased his wife, Mary Anne, who died in December 1914.  They were buried in Derrygrath Cemetery, outside of Clonmel.</p>
            <Image
                src='/maxey_grave.jpg'
                alt='Maxey grave, Derrygrath Cemetery'
                className='mt-10'
                caption="Joseph&#39;s family&#39;s grave in Derrygrath Cemtery, Co. Tipperary"
                width={300}
                height={24}
              />
        </ContentPage>
    </>
  }