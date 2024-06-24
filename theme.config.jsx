import { GrOverview } from "react-icons/gr";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCreditCard } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { GiMountainRoad } from "react-icons/gi";


export default {
  logo: <h1 style={{ fontWeight: "bold" }}>0XTRA WHITEPAPER</h1>,
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },
  primaryHue: 288,
  sidebar: {
    titleComponent({ title }) {
  
      if (title === 'Overview') {
        return <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {title === 'Overview' && <GrOverview style={{ marginRight: '10px' }} />}
                  {title}
                </div>
              </>  
     } 
      else if (title === 'Product') {
        return <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {title === 'Product' && <RiProductHuntLine style={{ marginRight: '10px' }} />}
                  {title}
                </div>
              </>
      }
      else if (title === 'Benefits') {
        return <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {title === 'Benefits' && <TbCreditCard style={{ marginRight: '10px' }} />}
                  {title}
                </div>
              </>
      }
      else if (title === 'Company') {
        return <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {title === 'Company' && <IoBusiness style={{ marginRight: '10px' }} />}
                  {title}
                </div>
              </>
      }
      else if (title === 'Roadmap') {
        return <>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {title === 'Roadmap' && <GiMountainRoad style={{ marginRight: '10px' }} />}
                  {title}
                </div>
              </>
      } 
      else {
        return <>
               {title}
              </>
      }
    }
  }
};
        
