new Vue({
    el: "#vue-app",
    data: {
        carouselMax: 1,
        selectedStory: 0,
        selectedTeam: 0,
        selectedMember: 0,
        selectedStoryText: "",
        selectedTeamText: "",
        selectedMemberText: "",
        selectedLanguage: "TH",
        storyList: [{
            storyName: "Chapter Ace - Sand Dust Battle",
            teamList: [{
                teamName: "Azurewars Team",
                memberList: [{
                    characterName: "Cycle Dog",
                    characterNameTH: "ไซเคิล ด็อก",
                    characterNameCN: "雷期",
                    characterNameJP: "サイクル ドッグ",
                    characterNameCNToolTip: "Léi qī",
                    characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>Birthday: 21 March</li>
                                </ul>
                                <div class="pt-2 text-danger">
                                    <h6 class="fw-bold">Story Concept</h6>
                                </div>
                                <hr/>
                                คิงควอนตัมอาเธอร์กำหนดให้ไซเคิลเป็นหัวหน้าเวปอนมาสเตอร์รุ่นที่ 4 
                                และมอบบททดสอบให้ไซเคิล เพื่อปลดล็อคอาวุธที่คิงควอนตัมลูเธอร์ออกแบบไว้
                                ทั้งนี้มาเธอร์ได้ใช้ประโยชน์จากความตั้งใจของอาเธอร์ เพื่อทำการวิจัยไลท์เตอร์
                                กับปีศาจเจ็ดเทพสังหาร โดยใช้ไซเคิลกับไซโตเป็นเครื่องมือ
                                <div class="pt-4 text-info">
                                    <h6 class="fw-bold">Character Relations</h6>
                                </div>
                                <hr/>
                                ไซเคิล เป็นรองหัวหน้าทีมแอชเชอร์วอร์ ทีมนี้นำโดยเรย์ที่อยู่เมืองเดียวกับไซโต
                                ในฐานะสมาชิกทีมผู้ใช้อาวุธเวปอนมาสเตอร์ จึงมีการติดต่อทีมอื่น ๆ ที่เป็นเวปอนมาสเตอร์ด้วยกัน
                                รู้จักกับทีมแมกม่าผ่านเหตุการณ์ไคมีร่าที่สังหารแม่ของไซเคิล
                                ในเนื้อเรื่องครึ่งหลัง จะสนิทกับซีโร่ ไลท์เตอร์ และอาเธอร์ เนื่องจากเหตุการณ์สำคัญ
                                ที่เกี่ยวกับตัวไซเคิลเอง
                                <div class="pt-4 text-warning">
                                    <h6 class="fw-bold">Abilities</h6>
                                </div>
                                <hr/>
                                ครึ่งเนื้อเรื่องแรก ไซเคิลใช้ดาบสั้นแปลงธาตุทั้งห้า และดาบสายฟ้าบาลมุง 
                                ผลิตโดยคิงควอนตัมฟินน์ เป็นอาวุธแบบเดียวกับที่ปู่ใช้
                                ส่วนครึ่งเนื้อเรื่องหลัง ไซเคิลจะใช้ดาบอิคลิปติก ความสามารถ pinpoint 
                                ผลิตโดยคิงควอนตัมลูเธอร์ สามารถท่องมิติที่ 4 และโจมตีได้อย่างแม่นยำ
                                <div class="pt-4 text-primary">
                                    <h6 class="fw-bold">Personality</h6>
                                </div>
                                <hr/>
                                ไซเคิลเป็นสุนัขโกลเด้นที่ค่อนข้างใจดี และยอมคนอื่นง่าย
                                ติดนิสัยไม่ยอมแพ้ต่อโชคชะตามาจากไซโต ทำให้ต่อสู้เก่ง
                                และมีเกราะป้องกันทางจิตใจประมาณหนึ่ง เมื่อมีคนพยายามควบคุมบงการ
                                <div class="pt-4 text-secondary">
                                    <h6 class="fw-bold">Likes and Dislikes</h6>
                                </div>
                                <hr/>
                                ไซเคิลชอบพุดดิ้ง ชอบเครื่องแบบทหาร เครื่องบินเจ็ท แว่นกันลมนักบิน
                                ชอบถูกบงการการเสียตัวตนเล็กน้อยในบริบทโรลเพลย์ ชอบคนใจดี ไม่เห็นแก่ตัวเกินไป
                                แต่อาจชอบความเจ็บปวดจากการแทงคนอื่นเล็ก ๆ เมื่อตัวเองรู้สึกเจ็บปวด
                                `,
                    characterDescriptionEN: `
                                <div class="text-success">
                                    <h6 class="fw-bold">Character Info</h6>
                                </div>
                                <ul>
                                    <li>Birthday: 21 March</li>
                                </ul>
                                Cycle is the main character of the story. Please see TH language for info.
                                `,
                    characterDescriptionCN: `
                                <div class="text-success">
                                    <h6 class="fw-bold">人物介绍</h6>
                                </div>
                                雷期是主角人物。他是狗狗。
                                `,
                    characterDescriptionCNToolTip: `
                                Rénwù jièshào, Léi qī shì zhǔjiǎo rénwù. Tā shì gǒu gǒu.
                                `,
                    characterDescriptionJP: `
                                <div class="text-success">
                                    <h6 class="fw-bold">キャラインフォ</h6>
                                </div>
                                申し訳ございません、時間がないので、タイ語のセックションでキャラインフォを見てお願いします。
                                `,
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 2
                },
                {
                    characterName: "Sky Hawk",
                    characterNameTH: "สกาย ฮอค",
                    characterNameCN: "-",
                    characterNameJP: "スカイ ホーク",
                    characterDescriptionTH: "พ่อครัวประจำทีม ใช้ธาตุเหล็กเป็นหลัก โจมตีทางกายภาพ",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Frost Polarbear",
                    characterNameTH: "ฟรอสท์ โพลาร์แบร์",
                    characterNameCN: "-",
                    characterNameJP: "石雪 熊",
                    characterDescriptionTH: "ผู้ใช้อาวุธต้องคำสาป 'ดาบมังกรดำ' ใช้ธาตุมืดและน้ำแข็ง สามารถจับจิตสังหารได้",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Knuckle Owl",
                    characterNameTH: "นัคเคิล อาล",
                    characterNameCN: "-",
                    characterDescriptionTH: "เพื่อนสมัยเด็กของเรย์ ใช้ธาตุมืดเป็นหลัก",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Nill Cat",
                    characterNameTH: "นิล แคท",
                    characterNameCN: "-",
                    characterDescriptionTH: "ลูกสาวของวาดอร์ แอบชอบเรย์",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Chimon Tortoise",
                    characterNameTH: "ชิม่อน ทอทัซ",
                    characterNameCN: "-",
                    characterDescriptionTH: "น้องชายคนเล็กของเรย์",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Saito Dog",
                    characterNameTH: "ไซโต ด็อก",
                    characterNameCN: "-",
                    characterDescriptionTH: "ผู้คุมโซนพิสเซส มีหน้าที่ทดสอบและดูแลไซเคิล",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                ]
            },
            {
                teamName: "Curse Squad Team",
                memberList: [{
                    characterName: "Undead Seal",
                    characterNameTH: "อันเดด ซีล",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: false,
                    imageCount: 1
                },
                {
                    characterName: "Snicker Magpie",
                    characterNameTH: "สนิคเคอร์ แมกไพ",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: false,
                    imageCount: 1
                },
                {
                    characterName: "Ghost Loris",
                    characterNameTH: "โกสต์ โลริส",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: false,
                    imageCount: 1
                },
                ]
            },
            {
                teamName: "Kr.Junior Team",
                memberList: [{
                    characterName: "Bruno Fox",
                    characterNameTH: "บรูโน่ ฟ็อกซ์",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Chain Dog",
                    characterNameTH: "เชน ด็อก",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Orgey Pig",
                    characterNameTH: "ออร์เกย์ พิก",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                ]
            },
            {
                teamName: "Magmawars Team",
                memberList: [{
                    characterName: "Magma Lion",
                    characterNameTH: "แมกม่า ไลอ้อน",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Verk Rat",
                    characterNameTH: "เวิร์ค แรท",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Dream Sheep",
                    characterNameTH: "ดรีม ชีพ",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: false,
                    imageCount: 1
                },
                {
                    characterName: "Kyle Duck",
                    characterNameTH: "ไคล์ ดัค",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: false,
                    imageCount: 1
                },
                ]
            },
            ]
        },
        {
            storyName: "Chapter Deuce - Gravity Island",
            teamList: [
                {
                    teamName: "Mighty Spear Team",
                    memberList: [
                        {
                            characterName: "Sune Monkey",
                            characterNameTH: "ซุน มังกี้",
                            characterNameCN: "孙火",
                            characterNameCNToolTip: "ซุนหวอ",
                            characterDescriptionTH: "(คำอธิบาย)",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: true,
                            imageCount: 1
                        },
                        {
                            characterName: "Crimson Beetle",
                            characterNameTH: "คริมซัน บีเทิล",
                            characterNameCN: "-",
                            characterDescriptionTH: "(คำอธิบาย)",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: true,
                            imageCount: 1
                        },
                        {
                            characterName: "Malee Squirrel",
                            characterNameTH: "มาลี สเควอเรล",
                            characterNameCN: "-",
                            characterDescriptionTH: "(คำอธิบาย)",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: true,
                            imageCount: 1
                        },
                    ]
                },
                {
                    teamName: "Chelonia Squad",
                    memberList: [
                        {
                            characterName: "Chelonia Turtle",
                            characterNameTH: "คีโลเนีย เทอร์เทิล",
                            characterNameCN: "-",
                            characterDescriptionTH: "ผู้คุมโซนแอเรียส มีหน้าที่ดูแลและทดสอบสกาย",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: true,
                            imageCount: 1
                        },
                        {
                            characterName: "Elibom Hawk",
                            characterNameTH: "เอลิบอม ฮอค",
                            characterNameCN: "-",
                            characterDescriptionTH: "เขาเป็นอินทรีที่เติบโตมาในตระกูคฮอค คุณปู่ของสกายเก็บเอลิบอมได้ และตั้งชื่อย้อนตัวละครคำว่าโมบาย (Mobile) ซึ่งเป็นชื่อของโมบาย อีเกิ้ล (Mobile Eagle) พ่อที่แท้จริงของเอลิบอม ที่ตายไปแล้วตั้งแต่เอลิบอมยังเด็ก",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: false,
                            imageCount: 1
                        }
                    ]
                },
                {
                    teamName: "Zodi Information Agency",
                    memberList: [
                        {
                            characterName: "Pure Otter",
                            characterNameTH: "เพียว ออตเตอร์",
                            characterNameCN: "-",
                            characterDescriptionTH: "(คำอธิบาย)",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: true,
                            imageCount: 1
                        },
                        {
                            characterName: "Cherry Woodpecker",
                            characterNameTH: "เชอร์รี่ วู้ดเพกเกอร์",
                            characterNameCN: "-",
                            characterDescriptionTH: "(คำอธิบาย)",
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: false,
                            imageCount: 1
                        },
                    ]
                }
            ]
        },
        {
            storyName: "Chapter Trey - Primo Island",
            teamList: [{
                teamName: "Leno Squad",
                memberList: [
                    {
                        characterName: "Leno Wolf",
                        characterNameTH: "เลโน่ วูล์ฟ",
                        characterNameCN: "-",
                        characterNameJP: "レーノ ウルフ",
                        characterDescriptionTH: "(คำอธิบาย)",
                        characterDescriptionEN: "(description)",
                        characterDescriptionCN: "(描述)",
                        characterDescriptionCNToolTip: "คำอธิบาย",
                        hasImage: true,
                        hasThumbnail: true,
                        imageCount: 1
                    },
                    {
                        characterName: "Anubis Jackal",
                        characterNameTH: "อนูบิส แจ็คกัล",
                        characterNameCN: "-",
                        characterDescriptionTH: `
                            <div class="text-success">
                                <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                            </div>
                            <ul>
                                <li>ผู้ใช้อาวุธต้องคำสาปสีม่วง มีคำสาปไร้ตัวตน สามารถกลบจิตสังหารได้</li>
                            </ul>
                            `,
                        characterDescriptionEN: "(description)",
                        characterDescriptionCN: "(描述)",
                        characterDescriptionCNToolTip: "คำอธิบาย",
                        hasImage: true,
                        hasThumbnail: false,
                        imageCount: 1
                    },
                    {
                        characterName: "Glacier Ice Dragon",
                        characterNameTH: "กราเซีย ไอซ์ ดราก้อน",
                        characterNameCN: "-",
                        characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ผู้ใช้อาวุธต้องคำสาปสีน้ำตาล</li>
                                    <li>เป็นหนึ่งในชุดอารักขาคิงควอนตัม สังกัดของเลโน่ อยู่เฝ้าห้องสมุดของไอออน</li>
                                </ul>
                                `,
                        characterDescriptionEN: "(description)",
                        characterDescriptionCN: "(描述)",
                        characterDescriptionCNToolTip: "คำอธิบาย",
                        hasImage: true,
                        hasThumbnail: false,
                        imageCount: 1
                    },
                    {
                        characterName: "MarkII Cat",
                        characterNameTH: "มาร์คทู แคท",
                        characterNameCN: "-",
                        characterDescriptionTH: `
                            <div class="text-success">
                                <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                            </div>
                            <ul>
                                <li>ผู้ใช้อาวุธต้องคำสาปสีชมพู เป็นตัวละครจากโปรเจคเกม Error Identification</li>
                                <li>อยู่เฝ้าห้องสมุดของไอออน</li>
                                <li><a href="https://shinoyakame.github.io/erroridentificationweb/">เล่นเกมบน web ที่นี่</a></li>
                            </ul>
                            `,
                        characterDescriptionEN: "(description)",
                        characterDescriptionCN: "(描述)",
                        characterDescriptionCNToolTip: "คำอธิบาย",
                        hasImage: true,
                        hasThumbnail: false,
                        imageCount: 1
                    },
                ]
            },
            {
                teamName: "Zodi Security",
                memberList: [{
                    characterName: "Hades Rabbit",
                    characterNameTH: "เฮดิส แรบบิท",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: false,
                    imageCount: 1
                },
                {
                    characterName: "Shining Cheetah",
                    characterNameTH: "ไชน์นิ่ง ชีต้าร์",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Zero Redpanda",
                    characterNameTH: "ซีโร่ เรดแพนด้า",
                    characterNameCN: "零堕",
                    characterNameCNToolTip: "หลิงตั้ว",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                ]
            },
            {
                teamName: "Executioner Angels",
                memberList: [
                {
                    characterName: "Lighter Fennec",
                    characterNameTH: "ไลท์เตอร์ เฟนเนค",
                    characterNameCN: "狐亮",
                    characterNameJP: "犬亀 ライター",
                    characterNameCNToolTip: "หูเลี่ยง",
                    characterDescriptionTH: "ไลท์เตอร์เป็น Avatar ของผู้แต่ง",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                {
                    characterName: "Sloth Goat",
                    characterNameTH: "สลอธ โกท",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                }
                ]
            },
            {
                teamName: "Beaker Laboratory",
                memberList: [{
                    characterName: "Beaker Cat",
                    characterNameTH: "บีเกอร์ แคท",
                    characterNameCN: "-",
                    characterDescriptionTH: "(คำอธิบาย)",
                    characterDescriptionEN: "(description)",
                    characterDescriptionCN: "(描述)",
                    characterDescriptionCNToolTip: "คำอธิบาย",
                    hasImage: true,
                    hasThumbnail: true,
                    imageCount: 1
                },
                ]
            },
            ]
        },
        {
            storyName: "Chapter Cater - Lunatic Kingdom",
            teamList: [
                {
                    teamName: "King Quantum",
                    memberList: [{
                        characterName: "Arthur Cat",
                        characterNameTH: "คิงควอนตัมอาเธอร์",
                        characterNameCN: "-",
                        characterDescriptionTH: "ราชาโลกใต้ดิน D Alternate",
                        characterDescriptionEN: "(description)",
                        characterDescriptionCN: "(描述)",
                        characterDescriptionCNToolTip: "คำอธิบาย",
                        hasImage: true,
                        hasThumbnail: true,
                        imageCount: 1
                    },
                    {
                        characterName: "Ion Human",
                        characterNameTH: "ไอออน ฮิวแมน",
                        characterNameCN: "-",
                        characterDescriptionTH: "(คำอธิบาย)",
                        characterDescriptionEN: "(description)",
                        characterDescriptionCN: "(描述)",
                        characterDescriptionCNToolTip: "คำอธิบาย",
                        hasImage: true,
                        hasThumbnail: false,
                        imageCount: 1
                    },
                    ]
                },
            ]
        }
        ]
    },
    methods: {
        update: function () {
            this.selectedStoryText = this.storyList[this.selectedStory].storyName;
            this.selectedTeamText = this.storyList[this.selectedStory].teamList[this.selectedTeam].teamName;
            this.selectedMemberText = this.storyList[this.selectedStory].teamList[this.selectedTeam].memberList[this.selectedMember].characterName;
        },
        updateStory: function (index) {
            this.selectedStory = index;
            this.selectedTeam = 0;
            this.selectedMember = 0;
            this.update();
        },
        updateTeam: function (index) {
            this.selectedTeam = index;
            this.selectedMember = 0;
            this.update();
        },
        updateMember: function (index) {
            this.selectedMember = index;
            this.update();
        },
        getImagePath: function (index) {
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];

            if (member.hasImage && index != undefined && index < member.imageCount) {
                var imageUrl = 'src/img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName;
                if (index > 0) {
                    imageUrl += '_' + index.toString();
                }
                var pngPath = imageUrl + '.png';
                return pngPath;
            } else {
                return 'src/img/no_image.png';
            }
        },
        showImage: function (index) {
            window.location.href = this.getImagePath(index);
        },
        getThumbnailPath: function () {
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];

            if (member.hasThumbnail) {
                var imageUrl = 'src/img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName;
                var pngPath = imageUrl + '_thumb.png';
                return pngPath;
            } else {
                return this.getImagePath(0);//'img/no_image.png';
            }
        },
        showThumbnail: function () {
            window.location.href = this.getThumbnailPath();
        },
        getCharacterName: function () {
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];

            if (this.selectedLanguage == undefined || (this.selectedLanguage == "TH" && member.characterNameTH)) {
                return member.characterNameTH;
            } else if (this.selectedLanguage == "EN" && member.characterName) {
                return member.characterName;
            } else if (this.selectedLanguage == "CN" && member.characterNameCN) {
                return member.characterNameCN;
            } else if (this.selectedLanguage == "JP" && member.characterNameJP) {
                return member.characterNameJP;
            } else {
                return "-";
            }
        },
        getCharacterNameTooltip: function () {
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            if (this.selectedLanguage == "CN" && member.characterNameCNToolTip != undefined) {
                return member.characterNameCNToolTip;
            } else {
                return "";
            }
        },
        getCharacterDescription: function () {
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];

            if (this.selectedLanguage == undefined || (this.selectedLanguage == "TH" && member.characterDescriptionTH)) {
                return member.characterDescriptionTH;
            } else if (this.selectedLanguage == "EN" && member.characterDescriptionEN) {
                return member.characterDescriptionEN;
            } else if (this.selectedLanguage == "CN" && member.characterDescriptionCN) {
                return member.characterDescriptionCN;
            } else if (this.selectedLanguage == "JP" && member.characterDescriptionJP) {
                return member.characterDescriptionJP;
            } else {
                return "-";
            }
        },
        getCharacterDescriptionTooltip: function () {
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            if (this.selectedLanguage == "CN" && member.characterDescriptionCNToolTip != undefined) {
                return member.characterDescriptionCNToolTip;
            } else {
                return "";
            }
        },
        changeLanguage: function (language) {
            if (language != undefined) {
                this.selectedLanguage = language;
            }
        }
    },
    beforeMount() {
        this.update();
    }
});