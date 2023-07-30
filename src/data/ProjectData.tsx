import styled from '@emotion/styled';

// -------- S U P E R  C R A S H  B R O S --------
import crash from '../images/crash.jpg';
import crash2 from '../images/crash2.jpg';
import crash3 from '../images/crash3.jpg';

// -------- G A R G O Y L E S --------
import demona from '../images/gargoyles/demona.png';
import goliath from '../images/gargoyles/goliath.png';
import bronx from '../images/gargoyles/bronx.png';

// -------- H E L L O  K I T T Y  K A I J U --------
import HK_green from '../images/HK/HKKaiju_green.jpg';
import HK_black from '../images/HK/HKKaiju_midnight.jpg';
import HK_rainbow from '../images/HK/HKKaiju_rainbow.jpg';
import HK_unicorn from '../images/HK/HKKaiju_unicorn.jpg';
import HK_pink from '../images/HK/HKKaiju_pink.jpg';

// -------- O V E R D R I V E  M A D N E S S --------
import overdrive from '../images/overdrive/overdrive.png';
import fizzie from '../images/overdrive/fizzie.png';
import sword from '../images/overdrive/sword.png';
import od from '../images/overdrive/od.png';

import buddies from '../images/buddies.png';
import coke from '../images/coke.jpg';

interface DataProps {
  art: ArtProps[];
  ux: UXProps[];
}

export interface ArtProps {
  title: string;
  id: string;
  thumb: string;
  images: string[];
  software: string[];
  description: JSX.Element;
  demo?: string;
}

export interface UXProps {
  title: string;
  id: string;
  href: string;
}
const I = styled.p`
  text-indent: 32px;
`;

const data: DataProps = {
  art: [
    {
      title: 'Josh Divine X Super Crash Bro',
      id: 'crash-mario',
      thumb: crash,
      images: [crash, crash2, crash3],
      software: ['Maxon Zbrush', 'Keyshot'],
      description: (
        <>
          <I>
            Introducing Super Crash Bro, the sensational 2nd installment in the
            celebrated 'Crash' series of collectible toys by artist Josh Divine.
            With Pixologic Zbrush, I carefully sculpted Super Crash Bro,
            retaining every intricate detail that makes it shine, while using
            KeyShot to bring the collectible to life with vibrant energy and
            realism.
          </I>
          <I>
            Immerse yourself in the enchanting world of Super Crash Bro. Add
            this mesmerizing treasure to your collection today!
          </I>
        </>
      ),
      demo: 'https://www.strangecattoys.com/products/super-crash-bro-by-josh-divine',
    },
    {
      title: 'Overdrive Madness',
      id: 'overdrive-madness',
      thumb: overdrive,
      images: [overdrive, fizzie, sword, od],
      software: ['Maxon Zbrush', 'Keyshot'],
      description: (
        <>
          <I>
            Venture into the thrilling world of Sunset Overdrive, where my
            heartfelt passion for this cherished Insomniac game led me on an
            exciting journey. As a huge fan, I eagerly embraced the challenge of
            creating a 3D sculpt that drew inspiration from the game's dynamic
            universe. With sincere dedication, I immersed myself in the creative
            process, utilizing Zbrush to sculpt a 3D model that aimed to embody
            the essence of my vision. Turning to the magic of Keyshot for
            rendering, I sought to present the character's lively energy and
            charm with as much realism as I could achieve.
            <I>
              This project reflects my genuine love for gaming and the modest
              skills I possess in using Zbrush and Keyshot, hoping to offer
              fellow enthusiasts and admirers of the game a delightful
              experience.
            </I>
          </I>
        </>
      ),
    },
    {
      title: 'Gargoyles - Disney X Kidrobot',
      id: 'gargoyles',
      thumb: demona,
      images: [demona, goliath, bronx],
      software: ['Maxon Zbrush', 'Keyshot'],
      description: (
        <>
          <I>
            As a skilled artist proficient in Zbrush and Keyshot, I had the
            honor of crafting a mesmerizing set of Gargoyle figures in
            collaboration with two iconic brands - Disney and Kidrobot. Drawing
            inspiration from the mystical and enchanting world of the TV show
            Gargoyles, I embarked on a journey of creativity and precision.
          </I>
          <I>
            With Zbrush as my artistic canvas, I sculpted each gargoyle,
            infusing them with a perfect balance of eerie charm and stylized
            detail. From their expressive facial features to the wings, every
            element was carefully honed to evoke a sense of wonder and mystery.
            Leveraging the power of Keyshot, I breathed life into these mystical
            creatures, rendering them with exceptional realism and an enchanting
            presence. The result is a set of gargoyle figures that capture the
            essence of the magical world they belong to, making them an
            unforgettable addition to Disney and Kidrobot's collection and a
            testament to my passion for bringing imaginative characters to life
            through the synergy of Zbrush sculpting and Keyshot rendering.
          </I>
        </>
      ),
      demo: 'https://www.strangecattoys.com/products/super-crash-bro-by-josh-divine',
    },
    {
      title: 'Buddies4Lyfe - Kozik X Kidrobot',
      id: 'buddies4lyfe',
      thumb: buddies,
      images: [buddies],
      software: ['Maxon Zbrush', 'Keyshot'],
      description: (
        <>
          <I>
            Behold the captivating expression of the Buddies 4 Lyfe Smorkin'
            Labbit Stool, an artful creation that exudes an air of nonchalant
            wisdom. This 8in sculpture has witnessed the world's wonders with
            indifference, making it an extraordinary addition to any home or
            office space. Crafted with passion and expertise, this remarkable
            piece is the brainchild of the renowned "godfather of art toys" and
            Kidrobot's Chief Creative Officer, Frank Kozik.
          </I>
          <I>
            With Zbrush as my tool of choice, I delved into sculpting, ensuring
            that every detail of this remarkable character was faithfully
            captured. To present the essence of the Buddies 4 Lyfe Smorkin'
            Labbit in all its glory, I turned to Keyshot for rendering. The
            result is a visual masterpiece that elevates the stool's charm and
            character, inviting viewers to engage with its nonchalant allure.
          </I>
        </>
      ),
    },
    {
      title: 'Kidrobot X Hello Kitty Kaiju',
      id: 'hk-kaiju',
      thumb: HK_green,
      images: [HK_green, HK_rainbow, HK_unicorn, HK_black, HK_pink],
      software: ['Maxon Zbrush', 'Keyshot'],
      description: (
        <>
          <I>
            Prepare to be enchanted as Hello Kitty stomps into your world,
            dressed in an adorable metallic green kaiju monster outfit. Standing
            tall at 8 inches, this vinyl figure exudes pure kawaii charm, and it
            even comes equipped with tiny buildings for added whimsy. Hello
            Kitty is ready to star in her very own retro monster movie, take
            center stage at comic conventions, sweep costume contests (a
            guaranteed win!), and, most importantly, become the crown jewel of
            your Hello Kitty collection. Don't miss out on the limited edition
            versions: Metallic Midnight Edition and Metallic Blush Edition.
          </I>
          <I>
            As a passionate artist skilled in Zbrush and Keyshot, I embraced the
            delightful challenge of bringing Hello Kitty Kaiju to life. Inspired
            by the adorable character and the thrilling kaiju genre, I sculpted
            every intricate detail of this enchanting vinyl figure.
          </I>
        </>
      ),
      demo: 'https://www.kidrobot.com/products/hello-kitty-kaiju-cosplay-8-vinyl-art-figure-metallic-green-edition?variant=40593968267361',
    },
    {
      title: 'Kidrobot X Coca-Cola',
      id: 'coca-cola',
      thumb: coke,
      images: [coke],
      software: ['Maxon Zbrush', 'Keyshot'],
      description: (
        <>
          <I>
            As a devoted enthusiast of both Kidrobot and Coca-Cola, I reveled in
            the challenge of breathing life into this extraordinary
            collaboration. The 8-inch Dunny came to life under my skilled hands,
            carefully sculpted with Zbrush to replicate the timeless contour of
            the Coca-Cola bottle, capturing its essence in every detail. A
            Fusion of Art and Nostalgia The Dunny not only pays homage to
            Coca-Cola's illustrious history but also infuses an air of nostalgia
            into the design. With an ear meticulously crafted to replicate the
            world-famous contour bottle, the effervescent charm of this iconic
            elixir is encapsulated with finesse.
          </I>
        </>
      ),
      demo: 'https://www.kidrobot.com/products/coca-cola-classic-resin-dunny-art-figure-limited-edition?variant=40787637174369',
    },
  ],
  ux: [
    {
      title: 'Spidey CSS',
      id: 'spidey',
      href: 'https://www.spideycss.com/?theme=neon&dark=false',
    },
  ],
};

export default data;
