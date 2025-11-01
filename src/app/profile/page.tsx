import Image from "next/image";
import profileImg from "@/public/profile/sooraj-santhosh.jpg";

export default function ProfilePage() {
  return (
    <div
      id="profile-page"
      className="flex flex-col justify-center items-center p-10 md:p-20 gap-10"
    >
      <h1 className="text-5xl font-bold text-center">Sooraj Santhosh</h1>
      <Image
        src={profileImg}
        alt="Profile image"
        className="object-cover rounded-full"
        priority
      />
      <p className="w-full text-justify">
        Sooraj Santhosh is a singer, songwriter, and composer with decades of
        experience performing in India and abroad. Known for his versatility,
        his music blends Indian classic, ethnic sounds with contemporary and
        global influences. The warm reception of &apos;The Gypsy Sun&apos;, his
        independent multilingual album of five songs, reflects this musical
        fluidity. Apart from being an independent artist with a distinctive
        vision and sensibility, and a theatre musician who brings layered
        auditory dimensions to performances, Sooraj is also a well loved
        playback singer. He has worked with nearly all major composers in the
        South Indian film industry, recording over 300 tracks, and received the
        Kerala State Award for &apos;Best Playback Singer&apos; in 2016. His
        music reaches over five million monthly listeners across major streaming
        platforms.
      </p>
      <h3 className="text-2xl font-bold text-center">Artistic Vision</h3>
      <p className="w-full text-justify">
        Sooraj Santhosh believes in the power of music to inspire and connect
        people. He uses his songs to address social issues, advocating for
        equality, peace and human rights. His music often highlights societal
        challenges and encourages change, communicating emotions and ideas with
        authenticity. Known for their deep lyrics and rich melodies, his works
        such as &apos;Aalayal Thara Veno&apos; and &apos;Thani Malayalam&apos; respond to culture,
        memory and collective human experiences.
      </p>
      <h3 className="text-2xl font-bold text-center">The Gypsy Sun</h3>
      <p className="w-full text-justify">
        Sooraj&apos;s debut Multilingual independent album, &apos;The Gypsy Sun&apos;, is a
        mesmerising collection that captures the essence of his musical journey.
        The album features an eclectic mix of tracks that blend various musical
        styles, showcasing Sooraj&apos;s versatility and depth as an artist. &apos;The
        Gypsy Sun&apos; has been praised for its innovative soundscapes, poetic
        lyrics and the emotional resonance of its songs.
      </p>
      <p className="text-xl text-center">Tracks listed:</p>
      <ul className="list-decimal list-inside text-left">
        <li>BANARASIYA</li>
        <li>THANI MALAYALAM</li>
        <li>AALAYAL THARA VENO?</li>
        <li>ISAI</li>
        <li>KURUTHI</li>
      </ul>
      <h3 className="text-2xl font-bold text-center">
        Collaborations and projects
      </h3>
      <p className="w-full text-justify">
        Sooraj began his playback singing career in 2010 with a song for the
        Telugu film &apos;Darling&apos;, composed by G.V. Prakash, for which he won &apos;the
        Best Upcoming Singer award&apos; at the Mirchi Music Awards South. Since
        then, he has worked with leading composers such as Ilaiyaraja, Yuvan
        Shankar Raja, D Imman, Charanraj, G.V. Prakash, Devi Sri Prasad,
        Bijibal, Sushin Shyam, and Jassie Gift. His latest hit was with Anirudh
        Ravichander for the Rajinikanth film &apos;Coolie&apos;. Sooraj has lent his voice
        to many top actors, including Prabhas, Vijay Devarakonda, Dulquer
        Salman, Fahadh Faasil, Junior NTR, Allu Arjun, Ram Charan Teja, Surya,
        Vijay, Tovino Thomas, Nivin Pauly, and Mahesh Babu. Recently, Sooraj
        Santhosh worked with director Krishand to compose 25 tracks for the sony
        liv Malayalam web series, &apos;Naalara Sangham&apos;. Sooraj was the lead
        vocalist and co-founder of the popular band, &apos;Masala Coffee&apos;, performing
        extensively in India and abroad until 2019. With Masala Coffee, he
        produced and composed music for various Tamil and Kannada films. He
        frequently collaborates with &apos;Janabheri&apos; Theatre, composing and
        producing music for three plays performed at international venues. A
        notable production, &apos;Thaaram&apos;, received appreciation from the Sangeet
        Natak Academy. His first international project was in 2011 with &apos;the
        European Chamber Choir&apos;, performing &apos;Shanmukha Kavacham&apos; in Germany and
        collaborating with composer Nicol Matt. He also toured Europe with the
        Indo-Austrian band &apos;Ashram Oriental Rock&apos;.
      </p>
      <h3 className="text-2xl font-bold text-center">Sooraj Santhosh Live</h3>
      <p className="w-full text-justify">
        Sooraj performs with his five-piece band, featuring a keyboardist,
        guitarist, bassist, drummer and flautist. The live shows are vibrant and
        immersive, enhanced with multimedia projections, animations, video
        footage, and a skillful use of lights and colors to create a dynamic
        stage experience.
      </p>
    </div>
  );
}
