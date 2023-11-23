
const stores=require('express').Router()



const store=[
    {
        id:1,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/Tiger321_1694768684428.jpg",
        name:"Tiger 3",
        story:"The third installment of the popular 'Tiger' franchise, starring Salman Khan and Katrina Kaif, is all set to release in November this year. However, the film's makers have not yet released any teaser or trailer, which has left fans eagerly awaiting updates."
      },
      {
        id:2,
        cat:"Bollywood",
      img:"https://cdn.bollywoodmdb.com/fit-in/post/DunkiToJawan3_1693653921223.jpg",
        name:"Jawan",
        story:"After Jawan, Shah Rukh Khan will be seen in Rajkumar Hiranis film Dunki which will be releasing around December 2023. The movie required Shah Rukh Khan to step out of his comfort zone."
      },
      {
        id:3,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/DunkiToJawan3_1693653921223.jpg",
        name: "Jawan",
        story:"After Jawan, Shah Rukh Khan will be seen in Rajkumar Hiranis film Dunki which will be releasing around December 2023. The movie required Shah Rukh Khan to step out of his comfort zone."
      },
      {
        id:4,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/post/news_desc/DelhiCrime_1681997215637.jpg",
        name:"Delhi Crime",
        story:"Delhi Crime is a gripping series that sheds light on the aftermath of the 2012 Delhi gangrape. Follow Deputy Commissioner of Police Vartika Chaturvedi (Shefali Shah) as she navigates the complicated case and balances her personal life impacted by the city's law and order situation. The series is a thought-provoking portrayal of a dark chapter in India's history, praised for its powerful performances, masterful storytelling, and unflinching portrayal of the brutal realities of sexual violence."
      },
      {
        id:5,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/post/news_desc/MumbaiDiaries2611_1681997272490.jpg",
        name:"Mumbai Diaries 26/11",
        story:"Mumbai Diaries 26/11 is a gripping medical thriller that captures the harrowing 2008 Mumbai terror attacks. Bombay General Hospital becomes a battleground as the staff, including three new resident doctors, work tirelessly to save lives amid the chaos. The show also follows events at the Taj Mahal Palace Hotel and a journalist reporting on the attacks. With director Nikhil Advani and talented actors Mohit Raina and Konkana Sen Sharma leading the cast, Mumbai Diaries 26/11 is a thrilling and emotional portrayal of one of India's darkest chapters."
      },
      {
        id:6,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/JabWeMet2_1694854506840.jpg",
        name:"Jab We Met",
        story:"'Jab We Met', the 2007 romantic comedy film starring Kareena Kapoor and Shahid Kapoor, is one of the most beloved Bollywood movies of all time. It follows the story of Aditya Kashyap, a heartbroken businessman who meets Geet Dhillon, a talkative Punjabi girl, on a train journey. The two strangers embark on a journey together that changes their lives forever "
      },
      {
        id:7,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/AjayDevgn21_1694870610630.jpg",
        name:"Singham Again",
        story:"Ajay Devgn, the Bollywood superstar who is known for his action-packed films and iconic characters, took to Twitter on September 16, 2023, to announce the beginning of the shoot for his upcoming film, 'Singham Again'. This film is the third installment in the popular 'Singham' franchise, which began in 2011 with the remake of the Tamil film of the same name."
      },
      {
        id:8,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/cover/300x450/17027_love-all_cover.jpg",
        name:"Storyline",
        story:"It is the story of a father, a son, and a sport connecting their destinies. Talent lifts a man towards fame yet destiny had other ideas and challenges to chase passion against all odds."
      },
      {
        id:9,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/cover/300x450/16979_kushi_cover.jpg",
        name:"Story",
        story:"Raised in an atheist household, a young man falls in love with the daughter of his father's arch-rival, a devout Hindu leader."
      },
      {
        id:10,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/Munnabhai3_1694759463099.jpg",
        name:"Munnabhai 3",
        story:"The 'Munna Bhai' franchise is one of the most popular and beloved in Bollywood. The two films in the series, 'Munna Bhai MBBS' (2003) and 'Lage Raho Munna Bhai' (2006), were both critical and commercial successes. There have been rumors of a third film in the works for many years, and a recent viral video has only added to the speculation."
      },
      {
        id:11,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/DreamGirl2Review_1692952386773.jpg",
        name:"Dream Girl 2",
        story:"After the huge success of Dream Girl in 2019, producer Ektaa Kapoor and director Raaj Shaandilyaa reunite with Ayushmann Khurrana for a sequel, titled Dream Girl 2. While the first installment featured Nushrratt Bharuccha as the female lead, the sequel has Ananya Panday opposite Khurrana. "
      },
      {
        id:12,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/TheGreatIndianFamilySongSahibaaOut_1694774069389.jpg",
        name:"The Great Indian Family",
        story:"The song is set against the backdrop of a traditional Indian wedding, and the visuals perfectly complement the lyrics. The bride and groom are dressed in beautiful traditional attire, and the ceremony is full of joy and celebration. The song is a reminder of the power of love and the importance of family."
      },
      {
        id:13,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/OMG2review_1691742748751.jpg",
        name:"OMG 2",
        story:"Kanti Sharan Mudgal (Pankaj Tripathi) is a staunch devotee of Lord Shiva whose world revolves around his work and his family. On an unfortunate day his teenage son Vivek (Aarush Sharma) gets expelled from school on grounds of obscenity. "
      },
      {
        id:14,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/1920HOTHreview_1687508757974.jpg",
        name:"1920",
        story:" On the occasion of her 21st birthday, Meghna (Avika Gor) tells her father Dheeraj about the love of her life. Little did she know that he is going to kill himself. When Meghana comes to know that her mother, who abandoned her as a child, has something to do with the suicide of her father, she sets out to avenge his death by destroying her mother’s current family. She uses her father’s spirit for revenge. What happens next forms the crux of the story."
      },
      {
        id:15,
        cat:"Bollywood",
        img:"https://cdn.bollywoodmdb.com/fit-in/post/AdipurushR_1686905748124.jpg",
        name:"Adipurush",
        story:"Raghava (Prabhas), Janaki (Kriti Sanon), and Laxman (Sunny Singh) are in the middle of 14 years of exile in a forest when Laxman, out of rage, chops off Surpanakha’s nose. When she narrates her suffering to her brother Lankesh (Saif Ali Khan), he kidnaps Sita and takes her to Lanka. Raghava, with the help of Bajrang (Devdatta Nage) and Vanar Sena, declares war on Lankesh in order to free Janaki from the clutches of the powerful demon. What happens next forms the crux of the story"
      },
      {
        id:16,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/MCDBLPA_EC076-H-2023.jpg?w=1024",
        name:"Black Panther",
        story:"Navigating the Marvel Cinematic Universe — or is it a Multiverse now? — requires, for many of us, a certain tolerance for green or LED screens, mass destruction, snarky dialogue and cosmic shtick. There are a few notable movies in the canon, but distinguishing one from the other isn’t always easy — which is what makes Ryan Coogler’s stirring and majestic Black Panther all the more of a standout. "
      },
      {
        id:17,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/MCDTIME_ZU004-H-2023.jpg?w=1024",
        name:"Time",
        story:"Garrett Bradleys documentary observes the brutality of the American carceral system from an uncommon vantage point. The filmmaker jettisons the expository soundbites of talking heads and the contextual support of charts and numbers, choosing instead to construct an impressionistic portrait of one family’s specific experience."
      },
      {
        id:18,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/46.-Bright-Star-MCDBRST_EC020-H-2023.jpg?w=1024",
        name:"Bright Star",
        story:"It’s the story of an unconsummated love affair in the final years of John Keats’ short life. Catnip for English majors? No question. But Jane Campion’s fine balance between the sumptuous and the trenchant will seduce even the sonnet-averse. In Ben Whishaw and Abbie Cornish’s elegant, deeply felt performances, the attraction between Keats and Fanny Brawne plays out across drawing rooms and the sunlit heath"
      },
      {
        id:19,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/47.-Pariah-MCDPARI_EC103-H-2023.jpg?w=1024",
        name:"Pariah",
        story:"Dee Rees’ breakthrough is a rare gem among coming-of-age films: a potent and sobering yet hopeful narrative about a young Black lesbian’s journey to self-acceptance. For that alone, the film — whose director recently became the first African American woman and queer woman of color to get a Criterion release — is well worth seeing. What lifts it onto this list is one of the century’s most stirring and unforgettable performances: Adepero Oduye as Alike, or “Lee,” a 17-year-old Black Brooklyn girl struggling to navigate her identity within the strictures set by her religious and socially conservative parents. "
      },
      {
        id:20,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/48.-Bridesmaids-MCDBRID_EC050-H-2023.jpg?w=1024",
        name:"Bridesmaids",
        story:"Finally, a film that lets women be funny!” was the word on the street upon the release of Paul Feig’s movie about a 30-something (Kristen Wiig) who spirals way, way, waaaaay out of control when her BFF (Maya Rudolph) gets engaged. There’s truth to that take, but Bridesmaids was also just the most satisfying, richly realized and consistently laugh-out-loud-hilarious comedy in years — and has yet to be dethroned."
      },
      {
        id:21,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2016/02/things_to_come.jpg?w=1024",
        name:"Things to Come",
        story:"Up until her quietly heartbreaking fifth feature, French director Mia Hansen-Love was something of a specialist in stories about young people experiencing life-changing events, whether breakups, the deaths of loved ones or careers cut short by failure. In Things to Come, she tackles the same themes from the perspective of a much older character, and the result finds her reaching an impressive new level of maturity."
      },
      {
        id:22,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/43.-Grizzly-Man-MCDGRMA_EC001-H-2023.jpg?w=1024",
        name:"Grizzly Man",
        story:"Werner Herzog has always insisted there’s no real difference between his documentary and fiction films. His subject in Grizzly Man, one of his greatest works, is environmental activist Timothy Treadwell — and indeed, he is as much a profoundly flawed, charismatic dreamer as the protagonists Klaus Kinski played in Herzog’s features Fitzcarraldo and Aguirre, the Wrath of God."
      },
      {
        id:23,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/42.-Never-Rarely-Sometimes-Always-MCDNERA_UC003-H-2023.jpg?w=1024",
        name:"Never Rarely Sometimes Always",
        story:"The pandemic shutdown hobbled the theatrical release of Eliza Hittman’s third feature but not its artistic impact — confirming the writer-director as a major talent in American independent cinema. Tracing a Pennsylvania teen’s odyssey through the bustle and cacophony of New York to end an unwanted pregnancy, the film is steeped in a naturalism that’s low-key yet electrifying. "
      },
      {
        id:24,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/41.-Pans-Labyrinth-MCDPALA_EC009-H-2023.jpg?w=1024",
        name:"Pan’s Labyrinth",
        story:"A filmmaker of limitless imagination, Guillermo del Toro took the exciting marriage of fantasy and political allegory in The Devil’s Backbone several steps further with this tonally audacious and visually beguiling dark fairy tale set soon after the Spanish Civil War, during the early days of the brutal Franco regime."
      },
      {
        id:25,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/40.-Summer-of-Soul-MCDSUOF_H4002-H-2023.jpg?w=1024",
        name:"Summer of Soul",
        story:"Do you remember the Harlem Cultural Festival?” For most Americans, the answer to the question posed by Questlove at the start of his vital and intoxicating documentary would probably be no. Dexterously edited by Joshua L. Pearson, Summer of Soul isn’t just a concert film about “Black Woodstock.” It’s a paean to American music culture,"
      },
      {
        id:26,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2016/08/i_am_not_your_negro_still_1_h_2016.jpg?w=1024",
        name:"I Am Not Your Negro",
        story:"any great documentaries have been released since the turn of this century, but none has shaken the rafters and shibboleths of political discourse with such potency as Raoul Peck’s searing film. A crucial contribution to the rediscovery of James Baldwin, a writer of blistering clarity and prescience,"
      },
      {
        id:27,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/38.-Children-of-Men-MCDCHOF_EC210-H-2023.jpg?w=1024",
        name:"Children of Men",
        story:"Dystopian sci-fi has become one of 21st century cinema’s most over-trafficked subgenres, but Alfonso Cuarón’s disturbing entrenchment in a war-torn fascist future where humanity’s fate hangs in the balance is striking because the world he so vividly creates is all but indistinguishable from our own. Peppered with technically dazzling set pieces and startling images that represent the redoubtable Mexican director’s"
      },
      {
        id:28,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/37.-Wendy-and-Lucy-MCDWEAN_EC002-H-2023.jpg?w=1024",
        name:"Wendy and Lucy",
        story:"Persuasive arguments could have been made for other post-2000 Kelly Reichardt works, like Old Joy and First Cow, which might be considered companion-piece reflections on male friendship. But we settled on this fine-grained portrait of an American underclass drifter as the perfect distillation of the director’s slow-cinema austerity, her intimate gauge of character and indelible sense of place."
      },
      {
        id:29,
        cat:"Hollywood",
      img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/35.-Lovers-Rock-TCDSMAX_ZU042-H-2023.jpg?w=1024",
        name:"Lovers Rock",
        story:"The best of the five films in Steve McQueen’s Small Axe series, Lovers Rock pulses with pleasure, proving that the skilled British director doesn’t only peddle in austere and muscular depictions of brutality. Contrary to his Oscar-winning 12 Years a Slave or genre foray Widows, this film is loose, limber and animated by an intangible joyousness. The romance between Martha (Amarah-Jae St. Aubyn) and Franklyn (Micheal Ward) unfurls over the course of a balmy London night in the 1980s, beginning on the dance floor of a house party"
      },
      {
        id:30,
        cat:"Hollywood",
        img:"https://www.hollywoodreporter.com/wp-content/uploads/2023/03/32.-The-Favourite-MCDFAVO_FS030-H-2023.jpg?w=1024",
        name:"The Favourite",
        story:"With his gift for combining pathos, acid comedy and absurdism, writer-director Yorgos Lanthimos has made a few of the great art house originals this century. The Favourite is his most accessible, but also arguably the richest in feeling and most dazzlingly performed, as well as chock-full of cruel ironies and caustic wit. Olivia Colman won an Oscar for her brilliant portrayal of Queen Anne (1665-1714), "
      },
      
      {
        id:31,
        cat:"Tech",
      img:"https://weobserved.com/wp-content/uploads/2023/06/Holo-Industries-Haptic-Touchless-Screens.webp",
        name:"Holo Industries Haptic Touchless Screens",
        story:"The haptic touchscreen is not a new thing, in every mobile and touchscreen this is a basic factor. However, it is achieved through haptic motors and touchscreen but now it is changing with new technology inventions. The creators of cutting-edge holographic screen technology have been exploring the integration of a feedback response into their holographic displays. This innovation enables users to not only visually perceive a holograph but also engage with it physically by touching, pinching, scrolling, spinning, and manipulating any image suspended in mid-air."
      },
      {
        id:32,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/06/CRDL-Therapeutic-Instrument.webp",
        name:"CRDL Therapeutic Instrument",
        story:"Sometimes, there are inventions that defy simple categorization and are full of contradictions. The CRDL serves as a prime example of this phenomenon—a device that seamlessly combines therapeutic functionality, magical qualities, and artistic aesthetics. It stood out as one of the most exquisitely designed products showcased at this year’s CES, earning it an innovation award. The product’s mission is equally enchanting, as it employs sound and human-centered design to foster more profound connections among individuals with physical or cognitive impairments, including dementia, autism, mental disabilities, or visual impairments."
      },
      {
        id:33,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/09/lenovo-y9000k-2023-gaming-laptop.webp",
        name:"Water-Cooled Gaming Laptop",
        story:"The Lenovo Y9000K 2023 is a flagship gaming laptop that was announced in September 2023. It is the first portable gaming laptop to feature a built-in liquid cooling system. This makes it possible for the laptop to handle the most demanding games and workloads without throttling or overheating."
      },
      {
        id:34,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/05/lenovo-thinkbook-wireless-dock-1.webp",
        name:"The Lenovo ThinkBook Wireless Dock",
        story:"One of the newest inventions featured in CES 2023 was the Lenovo ThinkBook Wireless Dock, it is a new type of docking station that allows users to connect their laptops to multiple displays and peripherals wirelessly. The dock uses Power-by-Contact technology to wirelessly charge the laptop, and it supports up to two 4K displays at 60Hz. The Wireless Dock also has a built-in fingerprint reader for secure login, and it supports up to 10W of wireless charging for mobile devices."
      },
      {
        id:35,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/05/samsung-display-1-ces-2023-flex-hybrid.webp",
        name:"Flex Hybrid Display from Samsung",
        story:"As observed while preparing the list for last year, we can’t keep Samsung away for much longer from the list of new inventions 2023. Flex Hybrid from Samsung Display is a new type of OLED display that can be folded and unfolded. It is designed for use in smartphones, tablets, and laptops. The display is made with a new type of material that is both flexible and durable. It can be folded and unfolded thousands of times without losing its shape or performance."
      },
      {
        id:36,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/09/The-Apple-A17-Pro-Processor.webp",
        name:"The Apple A17 Pro Processor",
        story:"The A17 Pro is built on a 3nm process, which is the smallest and most advanced process technology currently available. This allows Apple to pack more transistors onto the chip, which leads to better performance and efficiency."
      },
      {
        id:37,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/08/Technology-Improvements-in-Custom-Web-App-Development.webp",
        name:"Cloud Computing",
        story:"This scalable infrastructure ensures that custom web applications can handle varying workloads and user demands without compromising performance. Cloud-based solutions also offer increased security, cost-effectiveness, and easy maintenance, making them an essential component of modern web application development."
      },
      {
        id:38,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/08/Technologies-behind-Making-Custom-Shot-Glassesi.webp",
        name:"Shot Glasses",
        story:"The journey of creating a custom shot glass begins with a creative spark. Designers use advanced software such as Adobe Illustrator, CorelDRAW, or even 3D modeling software like Blender or Autodesk Fusion 360 to bring their ideas to life. These tools enable intricate detailing, manipulation of shapes, and precise measurements, ensuring that the final product matches the envisioned design."
      },
      {
        id:39,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2022/03/TVS-Electronics-USB-Gold-Keyboard.webp",
        name:"TVS Electronics USB Gold Bharat Keyboard      ",
        story:"The TVS Gold Bharat Keyboard is highly durable as well and is claimed to last for more than 2 lakh hours of intensive usage which is long enough. It comes with Cherry MX blue or Hua blue long-lasting mechanical switches providing an enjoyable typing experience."
      },
      {
        id:40,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2021/06/Givi-XS307-Xstream-Tank-Bag.jpg",
        name:"Givi XS307 Xstream Tank Bag",
        story:"The Givi XS307 is a fantastic magnetic tank bag and one of our favorite ones you can get without worries of a defect. This is a magnetic tank bag for motorcycles. You get exactly what you pay for – a safety clip strap that goes around the handlebars and a power outlet port."
      },
      {
        id:41,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/08/DisplayLink-Laptop-Docking-Station-What-is-in-the-box.webp",
        name:" Minisopuru ",
        story:"The Minisopuru 13-in-1 DisplayLink Laptop Docking Station can transform a single USB-C host port into a versatile hub with 12 ports (+DC port+Host USB 3.0 Port), catering to your daily needs. These ports include:"
      },
      {
        id:42,
        cat:"Tech",
        img:"https://weobserved.com/wp-content/uploads/2023/08/Verilux-Car-Battery-Charger-1.webp",
        name:"Car Battery Charger",
        story:"The charger boasts an array of safety features, including reverse polarity, short circuit, over-voltage/current, overcharge/discharge, overload, and overheat protection. With a 7-stage charging process, it ensures comprehensive battery protection and automatically stops charging once the battery is fully charged."
      },
      {
        id:43,
        cat:"Tech",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Two_3U_CubeSats.jpg/495px-Two_3U_CubeSats.jpg",
        name:" satellite",
        story:"A satellite or artificial satellite[a] is an object intentionally placed into orbit around a celestial body. Satellites have a variety of uses, including communication relay, weather forecasting, navigation (GPS), broadcasting, scientific research, and Earth observation. Additional military uses are reconnaissance, early warning, signals intelligence and, potentially, weapon delivery."
      },
      {
        id:44,
        cat:"Tech",
        img:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/ezgif-sixteen_nine_300.jpg?size=948:533",
        name:"Chandrayaan-3",
        story:"The third edition of India's moon mission, Chandrayaan-3, is all set to take off on July 14 at 2:35 pm onboard a Launch Vehicle Mark 3 (LVM3) from Satish Dhawan Space Centre, Sriharikota. Scientific community and Indians across the globe are waiting with bated breath, hoping for the successful edition of India's moon mission."
      },
      {
        id:45,
        cat:"Tech",
        img:"https://images.firstpost.com/wp-content/uploads/2013/12/Mangalyaan-PTI-new.jpg?impolicy=website&width=640&height=363",
        name:"Mangal",
        story:"In 2014, India sent the Mars Orbit Mission (MOM) into the space, and became the first country to send a satellite to orbit the planet at its first attempt. The project was notably led by women scientists; as is India's second lunar probe Chandrayaan 2, which was launched last month, and is due to land on Moon in early September. The patriotic outburst, that followed on these successful space missions, has fueled Indian film industry to lean towards sci-fi dramas."
      },
      {
        id:46,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2021/12/d247e7d25b164b77841f6022_cut_750x400_39.webp",
        name:"Peking Roasted Duck",
        story:"Peking duck (北京烤鸭 Běijīng kǎoyā) is a famous dish from Beijing, enjoying world fame, and considered as one of China national dishes. Peking duck is savored for its thin and crispy skin. Sliced Peking duck is often eaten with pancakes, sweet bean sauce, or soy sauce with mashed garlic. It is a must-taste dish in Beijing!"
      },
      {
        id:47,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2019/11/31acb7b302ec4b48b17443ed_cut_750x400_39.webp",
        name:"Kung Pao Chicken",
        story:"Kung Pao Chicken (宫保鸡丁 gōngbào jīdīng) is a famous Sichuan-style specialty, popular with both Chinese and foreigners. The major ingredients are diced chicken, dried chili, cucumber, and fried peanuts (or cashews)."
      },
      {
        id:48,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2019/11/a4ad4a7fe0cb401cb0be6383_cut_750x400_39.webp",
        name:"Sweet and Sour Pork",
        story:"Sweet and sour pork (糖醋里脊 tángcù lǐjǐ) has a bright orange-red color, and a delicious sweet and sour taste. At the very beginning there was only sweet and sour pork, but to meet demands, there have been some developments on this dish. Now, the pork can be substituted with other ingredients like chicken, beef, or pork ribs."
      },
      {
        id:49,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_cut_750x400_39.webp",
        name:"Hot Pot",
        story:"Hot pot, or hotpot (火锅 huǒguō), is one of the most popular dishes in China, especially in Sichuan Province or Chongqing. People cook in and eat from a simmering pot of soup stock (broth) on a gas/induction hob in the middle of the dining table with foodstuffs and condiments around the pot. People can add and cook whatever they like in the broth. The secret of whether a hot pot is good or not lies in the broth, which all the meat slices and vegetables take their flavor from."
      },
      {
        id:50,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2018/08/16d96371fd2944be86ffbdc1_cut_750x400_39.webp",
        name:"Dim Sum",
        story:"Dim sum (点心 diǎnxin) is one of the most popular Cantonese cuisine dishes. It contains a large range of small dishes, including dumplings, rolls, cakes, and meat, seafood, dessert, and vegetable preparations. There are more than one thousand dim sum dishes in existence today. "
      },
      {
        id:51,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_cut_750x400_39.webp",
        name:"Dumplings",
        story:"Dumplings (饺子 jiǎozi) are a traditional food type that is widely popular, especially in North China. Chinese dumplings consist of minced meat and/or chopped vegetables wrapped in a thin dough skin. Popular fillings are minced pork, diced shrimp, ground chicken, beef, and vegetables. Dumplings can be cooked by boiling, steaming, or frying."
      },
      {
        id:52,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2019/11/62745d5a726045e4a99a3885_cut_750x400_39.webp",
        name:"Ma Po Tofu",
        story:"Ma Po tofu (麻婆豆腐 Mápó dòufǔ 'Pockmarked Granny beancurd') is one of the most famous dishes in Chuan Cuisine (Sichuan food) with a history of more than 100 years. It consists of beancurd along with some minced meat (pork or beef) in a spicy sauce. The sauce is made from fermented black beans and chili paste (douban/douchi)."
      },
      {
        id:53,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2021/12/a57fdce570494d41b624119d_cut_750x400_39.webp",
        name:"Char Siu",
        story:"In Cantonese, char means 'fork' and siu means 'to roast', so char sui (叉烧 chāshāo) means fork roasted. It is a kind of Cantonese roast pork. It is eaten with rice or noodles. It is also used as a filling in baozi (a kind of steamed stuffed bun)."
      },
      {
        id:54,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2018/03/10725167158a4b8589bf3140_cut_750x400_39.webp",
        name:"Chow Mein",
        story:"Chow mein is the Cantonese pronunciation of the Mandarin chǎomiàn (炒面), which means 'stir-fried noodles'. This stir-fried dish consists of noodles, meat (usually chicken, beef, shrimp, or pork), onions, and celery."
      },
      {
        id:55,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2014/09/2b424254939d4d51adda30fe_cut_750x400_39.webp",
        name:"Fried Rice",
        story:"Fried rice (炒饭 chǎofàn) is a dish made from fried cooked rice and other ingredients, often including eggs, vegetables, seafood, or meat. Fried rice is one of the most common Chinese foods. It is easy to make fried rice at home using leftover rice and other meat or vegetables from the last meal."
      },
      {
  
        id:56,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2021/12/8189b6d0265149138f394b89_cut_750x400_39.webp",
        name:"Twice-Cooked Pork Slices",
        story:"Twice-cooked pork or double-cooked pork (回锅肉 huíguōròu) is one of the most famous Sichuan pork dishes. Its Chinese name is huiguorou, which means 'returned-to-the-pot meat'. Pork is boiled in the pot first. Then it is cooked again with other ingredients, including broad bean paste (doubanjiang), fermented black soybeans (douchi), garlic, ginger, and so on. "
      },
      {
        id:57,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2019/11/7b3afb974d7946bbbe397f7c_cut_750x400_39.webp",
        name:"Sichuan Pork",
        story:"Sichuan pork, or 'poached pork slices' (水煮肉片 shuǐzhǔ ròupiàn), is a famous Sichuan cuisine dish. Pork, with a coating made from egg-white and starch to preserve its freshness and tenderness, is boiled in broth. The meaty broth is typical Sichuan cuisine, featuring a peppery and spicy taste. When eating, you'll find each piece of meat contains abundant juices with a fresh and fragrant spicy aroma."
      },
      {
        id:58,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2021/12/e0f37497683b4935b7841043_cut_750x400_39.webp",
        name:"Xiaolongbao",
        story:"Xiǎolóngbāo (小笼包 'small basket buns') are a kind of baozi (Chinese steamed bun). They are popular in Jiangsu and Shanghai. Xiaolongbao are traditionally cooked in a small bamboo basket, which gives them their name. The most common xiaolongbao filling is pork. Other ingredients can include beef, crab meat, shrimp, seafood, and vegetable fillings."
      },
      {
        id:59,
        cat:"Food",
      img:"https://images.chinahighlights.com/allpicture/2021/12/44ca76c8361e41caa43d8859_cut_750x400_39.webp",
        name:"Zhajiangmian",
        story:"Zhajiangmian (炸酱面 /jaa-jyang-myen/ 'fried sauce noodles') is one of the most popular Shandong Cuisine dishes. It is a thick wheat noodle dish topped with zhajiang sauce. The sauce is made by simmering pork or beef with salty fermented soybean paste. In Chinese, zhajiang means 'fried sauce', while mian means 'noodles'. It is also a well-known small meal or snack in Beijing."
      },
      {
        id:60,
        cat:"Food",
        img:"https://images.chinahighlights.com/allpicture/2017/07/241e8e1b02ef463bafa65702_cut_750x400_39.webp",
        name:"Wonton Soup",
        story:"Wontons (馄炖 húndùn) are a kind of Chinese dumpling. Different from jiaozi, wontons have less filling and are wrapped in much thinner dough wrappers. The shapes of wontons can be different depending on how they're made. Some of them look like silver ingots, making them an auspicious 'wealth-invoking' dish."
      },
      {
        id:61,
        cat:"fitness",
        img:"https://images.unsplash.com/photo-1603503363848-6952525df449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        name:"Black fitness trainer performing squats with weight",
        story:"The chest-and-back superset session is one of your best training options. It's grueling and challenging, but it will leave your entire upper body with a vicious pump, and insure that you're hitting all critical upper body muscles."
  
      },
      {
        id:62,
        cat:"fitness",
        img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name:"Weight Lifting",
        story:"The chest-and-back superset session is one of your best training options. It's grueling and challenging, but it will leave your entire upper body with a vicious pump, and insure that you're hitting all critical upper body muscles."
  
      },
      {
        id:63,
        cat:"fitness",
        img:"https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name:" Acaibowl!",
        story:"There’s only one catch: The pullup is one of the most challenging exercises to master—a reason it commands so much respect among trainers. The average guy can only do two at a time, and you should be able to perform at least six in a row before you start doing sets."
  
      },
      {
        id:64,
        cat:"fitness",
        img:"https://plus.unsplash.com/premium_photo-1670513670485-b23274483f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name:"gym",
        story:"Sports Illustrated put together a list that ranked the 50 fittest athletes in sports. It rated athletes on speed, strength, agility and endurance. Each category was based on a scale of 0-10, so a perfect score would be 40."
  
      },
      {
        id:65,
        cat:"fitness",
        img:"https://hips.hearstapps.com/hmg-prod/images/strong-man-is-doing-cross-training-exercise-royalty-free-image-1667492535.jpg?resize=980:*",
        name:"Chest and Back Workout ",
        story:"The chest-and-back superset session is one of your best training options. It's grueling and challenging, but it will leave your entire upper body with a vicious pump, and insure that you're hitting all critical upper body muscles."
      },
      {
        id:66,
        cat:"fitness",
        img:"https://hips.hearstapps.com/hmg-prod/images/building-his-muscles-royalty-free-image-1694715299.jpg?resize=980:*",
        name:"Pullup",
        story:"There’s only one catch: The pullup is one of the most challenging exercises to master—a reason it commands so much respect among trainers. The average guy can only do two at a time, and you should be able to perform at least six in a row before you start doing sets."
      },
      {
        id:67,
        cat:"fitness",
        img:"https://hips.hearstapps.com/hmg-prod/images/exhausted-young-man-in-gym-having-a-break-royalty-free-image-1694637298.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        name:"Workout",
        story:"THE IDEA THAT you need a “no days off” mentality to accomplish your fitness goals is an antiquated concept of old-school gym culture as useful these days as a rusty barbell. You can try to use it, but you'll probably wind up getting hurt after too many reps."
      },
      {
        id:68,
        cat:"fitness",
        img:"https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/003/006/567/a2704b73b21defc73d1b5e621eb3c253_crop_north.jpg",
        name:"Cristiano Ronaldo",
        story:"Sports Illustrated put together a list that ranked the 50 fittest athletes in sports. It rated athletes on speed, strength, agility and endurance. Each category was based on a scale of 0-10, so a perfect score would be 40."
      },
      {
        id:69,
        cat:"fitness",
        img:"https://media.istockphoto.com/id/1215073413/photo/woman-vlogging-about-healthy-eaating.webp?s=1024x1024&w=is&k=20&c=1uciw6KHIK69wrGSgpcfknb8wE8j_aqWZK7MwYcEAaE=",
        name:"Diet",
        story:"Young and cheerful woman vlogging on mobile phone about healthy food and cooking. Concept of healthy eating and social media influencing."
      },
      {
        id:70,
        cat:"fitness",
        img:"https://static.india.com/wp-content/uploads/2016/11/Vidyut-Jamwal.jpg",
        name:"Vidyut Jamwal",
        story:"Trained in Kalaripayattu, a form of martial art, Vidyut Jamwal made an impression with his debut movie, Force. The actor is a fitness freak and loves working out."
      },
      {
        id:71,
        cat:"fitness",
        img:"https://static.india.com/wp-content/uploads/2016/11/Aamir-Khan-1.jpg",
        name:"Aamir Khan",
        story:"Aamir Khan amazed us with his transformation in Gajini. The Mr Perfectionist then trained for around nine months to get the toned look for Dhoom 3 and now, in the upcoming film Dangal"
      },
      {
        id:72,
        cat:"fitness",
        img:"https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk2MTM3MjYwMDQ0NTkyMjcz/6-pullover.webp",
        name:"Pullover",
        story:"Not only is it an effective triceps exercise, the dumbbell pullover improves strength and coordination between the triceps and the muscles of your upper back. It also works the lats and is great at strengthening your core."
      },
      {
        id:73,
        cat:"fitness",
        img:"https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk3Mzg4NzI3MzQzOTgxNTc0/chaturanga_justinsteele.webp",
        name:"Chaturanga",
        story:"This signature yoga move challenges you to support your entire body with your triceps."
      },
      {
        id:74,
        cat:"fitness",
        img:"https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTk3Mzg4NzI3MzQzOTgyNDkx/overheadtricepsextension.webp",
        name:"triceps workouts",
        story:"Sometimes you've got to trash your triceps (in the best way) to stimulate new levels of growth in your arms. In order to do so, you need to incorporate the best triceps workouts and exercises."
      },
      {
        id:75,
        cat:"fitness",
        img:"",
        name:"Arm circles",
        story:""
      }
       
      
]
stores.get("/store",(req,res)=>{
    res.send(store)
})

module.exports=stores;