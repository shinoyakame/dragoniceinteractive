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
                storyName: "Animalwars Series",
                teamList: [{
                        teamName: "Animalwars Team",
                        memberList: [{
                                characterName: "Cycle Dog",
                                characterNameTH: "ไซเคิล ด็อก",
                                characterNameCN: "雷期",
                                characterNameJP: "犬北 時",
                                characterNameCNToolTip: "Léi qī",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวเอกของเรื่อง</li>
                                    <li>ผู้ใช้อาวุธสายไอเทม ใช้ระเบิดเป็นอาวุธ</li>
                                </ul>
                                <div class="pt-2 text-danger">
                                    <h6 class="fw-bold">Chapter 1 : Sand Dust Battle</h6>
                                </div>
                                <hr/>
                                ไซเคิลเป็นนักศึกษาจบใหม่จากสถาบันผู้ใช้อาวุธเมืองสแควร์
                                 และเป็นรองหัวหน้าทีมผู้ใช้อาวุธ "แอนิมอลวอร์" เขาได้รับภารกิจ
                                 ให้เข้าร่วมการต่อสู้ที่เมืองแซนดัสค์
                                <div class="pt-4 text-info">
                                    <h6 class="fw-bold">Chapter 2 : Gravity Island</h6>
                                </div>
                                <hr/>
                                ภารกิจที่สองเป็นการปกป้องราชาวานรเพลิง จากจักรวรรดิ์คีโลเนีย
                                 ที่นครลอยฟ้า
                                <div class="pt-4 text-warning">
                                    <h6 class="fw-bold">Chapter 3 : Junior Battle Festival</h6>
                                </div>
                                <hr/>
                                ไซเคิลเข้าร่วมการแข่งขันประลองเวท ก่อนถูกผู้คุมโซนไซโตนำตัวออกไป
                                กลางคัน เพื่อเตรียมรับมือกับไลท์เตอร์
                                <div class="pt-4 text-primary">
                                    <h6 class="fw-bold">Chapter Zero : Casino Town</h6>
                                </div>
                                <hr/>
                                ไซเคิลเข้าร่วมการแข่งขัน E-sport ที่เมืองคาสิโน
                                <div class="pt-4 text-secondary">
                                    <h6 class="fw-bold">Chapter D : Dimension Alternate</h6>
                                </div>
                                <hr/>
                                ไซเคิลพบกับราชาโลกใต้ดินคิงควอนตัมอาเธอร์
                                `,
                                characterDescriptionEN: `
                                <div class="text-success">
                                    <h6 class="fw-bold">Character Info</h6>
                                </div>
                                <ul>
                                    <li>Main Protagonist</li>
                                    <li>Class: Item, Weapon: Bomb</li>
                                </ul>
                                <div class="pt-2 text-danger">
                                    <h6 class="fw-bold">Chapter 1 : Sand Dust Battle</h6>
                                </div>
                                <hr/>
                                Cycle is a fresh graduated student from 'Square Weapon Master Academy'.
                                 He is 'Animalwars Team' Pre-leader, got a request joining the battle at Sand Dust Town.
                                <div class="pt-4 text-info">
                                    <h6 class="fw-bold">Chapter 2 : Gravity Island</h6>
                                </div>
                                <hr/>
                                His second request is to protect Fire Monkey King from Chelonia Empire at Gravity Island.
                                <div class="pt-4 text-warning">
                                    <h6 class="fw-bold">Chapter 3 : Junior Battle Festival</h6>
                                </div>
                                <hr/>
                                Cycle joined Junior Battle Festival, then was forced leaving by Saito to prepare the battle with Lighter.
                                <div class="pt-4 text-primary">
                                    <h6 class="fw-bold">Chapter Zero : Casino Town</h6>
                                </div>
                                <hr/>
                                Cycle joined E-sport event at Casino Town.
                                <div class="pt-4 text-secondary">
                                    <h6 class="fw-bold">Chapter D : Dimension Alternate</h6>
                                </div>
                                <hr/>
                                Cycle met with King Quantum Arther.
                                `,
                                characterDescriptionCN: `
                                <div class="text-success">
                                    <h6 class="fw-bold">人物介绍</h6>
                                </div>
                                雷期是主角人物。他是十四岁狗狗。
                                `,
                                characterDescriptionCNToolTip: `
                                Rénwù jièshào, Léi qī shì zhǔjiǎo rénwù. Tā shì shísì suì gǒu gǒu.
                                `,
                                characterDescriptionJP: `
                                <div class="text-success">
                                    <h6 class="fw-bold">キャラインフォ</h6>
                                </div>
                                「犬北 時」このキャラは… えと… 日本語が私を書けないですwww。
                                `,
                                hasImage: true,
                                hasThumbnail: true,
                                imageCount: 2
                            },
                            // {
                            //     characterName: "Ray Tortoise",
                            //     characterNameTH: "เรย์ ทอทัซ",
                            //     characterNameCN: "光龙",
                            //     characterNameCNToolTip: "กวางหลง",
                            //     characterDescriptionTH: "หัวหน้าทีมอะนิมมอลวอร์ ฉายา 'วิหคแห่งแสง' และ 'มังกรน้อย' ใช้เวทแสงในการต่อสู้",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     characterDescriptionCNToolTip: "คำอธิบาย",
                            //     hasImage: true,
                            //     hasThumbnail: true,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Ray Tortoise (Demon Form)",
                            //     characterNameTH: "เรย์ ทอทัซ (ร่างปีศาจ)",
                            //     characterNameCN: "光龙",
                            //     characterNameCNToolTip: "กวางหลง",
                            //     characterDescriptionTH: "ร่างปีศาจในนิยายจะเรียกว่า 'มังกรแฝงร่าง' ใช้ได้เฉพาะกลุ่มเซเว่นวอนเดอร์",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     characterDescriptionCNToolTip: "คำอธิบาย",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Ray Tortoise (Dragon Form)",
                            //     characterNameTH: "เรย์ ทอทัซ (ร่างมังกร)",
                            //     characterNameCN: "光龙",
                            //     characterDescriptionTH: "ร่างหลังจากทำพิธีสืบทอดทายาทมังกร เรย์ใช้ร่างนี้ในการต่อสู้กับคิงโครโนดราก้อน ในนิยายยังไม่ปรากฏ",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
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
                            // {
                            //     characterName: "Knuckle Owl (Teenage)",
                            //     characterNameTH: "นัคเคิล อาล (ตอนโต)",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "ปรากฏตัวในนิยาย Animalwars Series x Detective Company",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     characterDescriptionCNToolTip: "คำอธิบาย",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
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
                            // {
                            //     characterName: "Chelonia Turtle (Golgol Form)",
                            //     characterNameTH: "คีโลเนีย เทอร์เทิล (ร่างกอลกอล)",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "กอลกอลเป็นเพ็ทของคีโลเนีย ที่อยู่ในรูปแบบเวทมนตร์ ไม่ใช่พันธะสัญญาเหมือนคนอื่น",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Sarada Polarbear",
                            //     characterNameTH: "ซาราดะ โพลาร์แบร์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เสนาธิการคนสนิทของคีโลเนีย",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Phiral Penguin",
                            //     characterNameTH: "ฟิรอล เพนกวิน",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของไซเคิล",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Weremon Wolf",
                            //     characterNameTH: "เวม่อน วูล์ฟ",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของฟรอสท์ สมุนของคิงโครโนดราก้อนหมายเลข 1",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Alex Rat",
                            //     characterNameTH: "อเล็กซ์ แรท",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของนิล",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Chika Mole",
                            //     characterNameTH: "ชิก้า โมล์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของนัคเคิล (ปัจจุบันยังไม่ทำพันธะสัญญา)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Beo Basilisk",
                            //     characterNameTH: "เบโอ บาซิลลิสค์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของเรย์",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Signal Hedgehog",
                            //     characterNameTH: "ซิกนอล เฮดจ์ฮ็อก",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของสกาย",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Zuri Sparrow",
                            //     characterNameTH: "ซูริ สแปโรว์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของชิม่อน",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    // {
                    //     teamName: "Atomic Team",
                    //     memberList: [{
                    //             characterName: "Champion Rabbit",
                    //             characterNameTH: "แชมเปี้ยน แรบบิท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "เจ้าชายมาเฟีย",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: true,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Sabi Rat",
                    //             characterNameTH: "ซาบี้ แรท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "เสนาธิการของคีโลเนีย น้องสาวของเวิร์ค และคู่หูของแชมเปี้ยน",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: true,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Neon Furret",
                    //             characterNameTH: "นีออน เฟอร์เรต",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "เวปอนมาสเตอร์คนที่ 13",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: true,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Remedy Rabbit",
                    //             characterNameTH: "เรเมดี้ แรบบิท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "พี่สาวของฟีล",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Shelter Bull",
                    //             characterNameTH: "เชลท์เตอร์ บูล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "น้องชายบุญธรรมของไกอา บูล ซึ่งปัจจุบันกลายเป็นเสนาธิการของคีโลเนีย",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Radow Magpie",
                    //             characterNameTH: "เรโดว์ แมกไพ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "พี่ชายต่างสายเลือดของสนิคเคอร์",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Black Rabbit",
                    //             characterNameTH: "แบล็ค แรบบิท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "หัวหน้าหน่วยอารักขาของเรเมดี้",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "White Rabbit",
                    //             characterNameTH: "ไวท์ แรบบิท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "รองหัวหน้าหน่วยอารักขาของเรเมดี้",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Rildo Rabbit",
                    //             characterNameTH: "ริลโด้ แรบบิท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "ทหารยามบ๊อง ๆ ของเพียว ชอบสูดกัญชา เป็นคนส่งสาร",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
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
                            // {
                            //     characterName: "Illus Fish",
                            //     characterNameTH: "อิลลัส ฟิช",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Rose Hawk",
                            //     characterNameTH: "โรส ฮอค",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    // {
                    //     teamName: "Blue Rose",
                    //     memberList: [{
                    //             characterName: "Uka Camel",
                    //             characterNameTH: "อูก้า คาเมล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "ตัวประกอบบันเทิง",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Agu Girrafe",
                    //             characterNameTH: "อากู๋ ยีราฟ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "ตัวประกอบบันเทิง",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Uke Monkey",
                    //             characterNameTH: "อูกี๋ มังกี้",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "ตัวประกอบบันเทิง",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Egae Gecko",
                    //             characterNameTH: "อีแก่ เกคโค่",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "ตัวประกอบบันเทิง",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
                    // {
                    //     teamName: "Chelonia Empire",
                    //     memberList: [{
                    //             characterName: "Mother Cat",
                    //             characterNameTH: "มาเธอร์ แคท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Elemental Dog",
                    //             characterNameTH: "เอเลเมนทอล ด็อก",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "ร่างมืดของไซเคิล",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: true,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "King Chronodragon",
                    //             characterNameTH: "คิงโครโนดราก้อน",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Gaia Bull",
                    //             characterNameTH: "ไกอา บูล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Dusk Tortoise",
                    //             characterNameTH: "ดัสค์ ทอทัซ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Dusk Tortoise (Demon Form)",
                    //             characterNameTH: "ดัสค์ ทอทัซ (ร่างปีศาจ)",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
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
                            {
                                characterName: "Tox Bat",
                                characterNameTH: "ท็อกซ์ แบท",
                                characterNameCN: "-",
                                characterDescriptionTH: "ชาวเนทูล่า การ์เด้นท์ ในนิยายภาครีเมคนั้นได้เฉลยว่าเป็นไลท์เตอร์ร่างเทวทูตปลอมตัวมา",
                                characterDescriptionEN: "(description)",
                                characterDescriptionCN: "(描述)",
                                characterDescriptionCNToolTip: "คำอธิบาย",
                                hasImage: true,
                                hasThumbnail: false,
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
                    },
                    {
                        teamName: "D Alternate",
                        memberList: [{
                                characterName: "King Quantum Arther",
                                characterNameTH: "คิงควอนตัมอาเธอร์",
                                characterNameCN: "-",
                                characterDescriptionTH: "พระเอกตัวที่สามของเรื่อง เป็นราชาโลกใต้ดิน D Alternate",
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
                    // {
                    //     teamName: "Detective Company",
                    //     memberList: [{
                    //             characterName: "Phoenix",
                    //             characterNameTH: "ฟินิกซ์",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Hunter",
                    //             characterNameTH: "ฮันเตอร์",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
                    {
                        teamName: "Executioner Angels",
                        memberList: [{
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
                                characterName: "Lighter Fox (Angel Form)",
                                characterNameTH: "ไลท์เตอร์ ฟ็อกซ์ (ร่างเทวทูต)",
                                characterNameCN: "狐亮",
                                characterNameJP: "犬亀 ライター",
                                characterNameCNToolTip: "หูเลี่ยง",
                                characterDescriptionTH: "ไลท์เตอร์เป็น Avatar ของนักเขียนนิยาย ร่างนี้ปรากฏบ่อยที่สุด และมีความเป็นมิตรกว่าร่างอื่น ๆ",
                                characterDescriptionEN: "(description)",
                                characterDescriptionCN: "(描述)",
                                characterDescriptionCNToolTip: "คำอธิบาย",
                                hasImage: true,
                                hasThumbnail: true,
                                imageCount: 1
                            },
                            // {
                            //     characterName: "Lighter Fox (Parasyte Form)",
                            //     characterNameTH: "ไลท์เตอร์ ฟ็อกซ์",
                            //     characterNameCN: "狐亮 (หูเลี่ยง)",
                            //     characterDescriptionTH: "ไลท์เตอร์เป็นตุ๊กตา Remote ของ ไพรด์ ร่างนี้ปรากฏในตอนคาสิโนภาคซีโร่ ไม่เป็นมิตร",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: true,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Pride Fox",
                            //     characterNameTH: "ไพรด์ ฟ็อกซ์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: true,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Gelix Raccoon",
                            //     characterNameTH: "เกลิกซ์ แรคคูน",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
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
                            },
                            // {
                            //     characterName: "Luna Chick",
                            //     characterNameTH: "ลูน่า ชิค",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Goldy Seal",
                            //     characterNameTH: "โกลดี้ ซีล",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Flanky Otter",
                            //     characterNameTH: "แฟลงกี้ ออตเตอร์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Shadowman Dog",
                            //     characterNameTH: "ชาโดว์แมน ด็อก",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Envy Dragon",
                            //     characterNameTH: "เอนวี่ ดราก้อน",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Furabute Furret",
                            //     characterNameTH: "ฟุราบุเตะ เฟอร์เร็ต",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "สมุนปัญญาประดิษฐ์ของไลท์เตอร์ ปรากฏเฉพาะภาคต้นฉบับ",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    {
                        teamName: "Gravity Island",
                        memberList: [{
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
                            },
                            // {
                            //     characterName: "Elibom Hawk (Mobile Eagle Form)",
                            //     characterNameTH: "เอลิบอม ฮอค (ร่างโมบาย อีเกิ้ล)",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เอลิบอมใช้ร่างนี้ต่อสู้กับทีมแอนิมมอลวอร์ที่มีสมาชิก 6 คน ใน SS2",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Crune Panther",
                            //     characterNameTH: "ครูน แพนเทอร์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Grid Monkey",
                            //     characterNameTH: "กริด มังกี้",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Impact Beetle",
                            //     characterNameTH: "อิมแพค บีเทิ้ล",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    // {
                    //     teamName: "Hero Past",
                    //     memberList: [{
                    //             characterName: "Diamond Dog",
                    //             characterNameTH: "ไดม่อน ด็อก",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Bullet Tortoise",
                    //             characterNameTH: "บูลเล็ท ทอทัซ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Paper Owl",
                    //             characterNameTH: "เปเปอร์ อาล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
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
                                characterName: "Chen Dog",
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
                            // {
                            //     characterName: "Jolly Elephant",
                            //     characterNameTH: "โจลี่ เอเลแฟนท์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Flame Cat",
                            //     characterNameTH: "เฟลม แคท",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Feel Rabbit",
                            //     characterNameTH: "ฟีล แรบบิท",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Ore Panda",
                            //     characterNameTH: "โอ แพนด้า",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Sica Frog",
                            //     characterNameTH: "ซิคา ฟร็อก",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "เพ็ทของเชน",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
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
                            // {
                            //     characterName: "Chimone Chimera (Demon Form)",
                            //     characterNameTH: "คีโมน ไคมีร่า (ร่างปีศาจ)",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    {
                        teamName: "Mighty Spear Team",
                        memberList: [{
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
                            // {
                            //     characterName: "Zero Redpanda (Teenage)",
                            //     characterNameTH: "ซีโร่ เรดแพนด้า (ตอนโต)",
                            //     characterNameCN: "零堕",
                            //     characterDescriptionTH: "ปรากฏตัวในนิยาย Animalwars Series x Detective Company",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Mawmaw Termite",
                            //     characterNameTH: "มาวมาว เทอร์ไมท์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Wing Butterfly",
                            //     characterNameTH: "วิง บัทเทอร์ไฟล์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Midmid Ant",
                            //     characterNameTH: "มิดมิด แอนท์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Phenia Phoenix",
                            //     characterNameTH: "ฟีเนีย ฟินิกซ์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    {
                        teamName: "Rebellion Team",
                        memberList: [{
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
                            // {
                            //     characterName: "Chipper Chick",
                            //     characterNameTH: "ชิปเปอร์ ชิค",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    // {
                    //     teamName: "Sand Dust Battle",
                    //     memberList: [{
                    //             characterName: "Gana Squirrel",
                    //             characterNameTH: "กาน่า สเควอเรล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "แม่ของมาลี ถูกไคมีร่าสังหาร",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Livo Squirrel",
                    //             characterNameTH: "ลิโว้ สเควอเรล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Shamant Squirrel",
                    //             characterNameTH: "ชามานท์ สเควอเรล",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
                    // {
                    //     teamName: "Square Academy",
                    //     memberList: [{
                    //             characterName: "Sharp Wolf",
                    //             characterNameTH: "ชาร์ป วูล์ฟ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Spark Dog",
                    //             characterNameTH: "สปาร์ค ด็อก",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Bronze Deer",
                    //             characterNameTH: "บรอนซ์ เดียร์",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Rod Polarbear",
                    //             characterNameTH: "ร็อด โพลาร์แบร์",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Zephyr Hawk",
                    //             characterNameTH: "เซฟเฟอร์ ฮอค",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Jewel Hawk",
                    //             characterNameTH: "จูเอล ฮอค",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Cargo Sheep",
                    //             characterNameTH: "คาร์โก้ ชีพ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "พ่อของดรีม พ่อค้าขายของชำประจำเมืองสแควร์ เสียชีวิตที่นครลอยฟ้า",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
                    // {
                    //     teamName: "Vador Laboratory",
                    //     memberList: [{
                    //             characterName: "Beastking Tortoise",
                    //             characterNameTH: "บีสค์คิง ทอทัซ",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Beastking Tortoise (Dragon Form)",
                    //             characterNameTH: "บีสค์คิง ทอทัซ (ร่างมังกร)",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Vador Cat",
                    //             characterNameTH: "วาดอร์ แคท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Vador Cat (Demon Form)",
                    //             characterNameTH: "วาดอร์ แคท (ร่างปีศาจ)",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Music Cat",
                    //             characterNameTH: "มิวสิค แคท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //         {
                    //             characterName: "Punchz Cat",
                    //             characterNameTH: "พันซ์ แคท",
                    //             characterNameCN: "-",
                    //             characterDescriptionTH: "(คำอธิบาย)",
                    //             characterDescriptionEN: "(description)",
                    //             characterDescriptionCN: "(描述)",
                    //             hasImage: true,
                    //             hasThumbnail: false,
                    //             imageCount: 1
                    //         },
                    //     ]
                    // },
                    {
                        teamName: "World Government",
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
                            // {
                            //     characterName: "Apollo Rabbit",
                            //     characterNameTH: "อะพอลโล แรบบิท",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
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
                            // {
                            //     characterName: "Shiro Sparrow",
                            //     characterNameTH: "ชิโร่ สแปโรว์",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: true,
                            //     imageCount: 1
                            // }
                        ]
                    }
                ]
            },
            // {
            //     storyName: "Penguin Detective",
            //     teamList: [{
            //             teamName: "Antagonists",
            //             memberList: [{
            //                 characterName: "Devi Squidron",
            //                 characterNameTH: "ดีไว สควิดรอน",
            //                 characterNameCN: "-",
            //                 characterDescriptionTH: "(คำอธิบาย)",
            //                 characterDescriptionEN: "(description)",
            //                 characterDescriptionCN: "(描述)",
            //                 hasImage: true,
            //                 hasThumbnail: false,
            //                 imageCount: 1
            //             }, ]
            //         },
            //         {
            //             teamName: "Protagonists",
            //             memberList: [{
            //                     characterName: "Rein Pengon",
            //                     characterNameTH: "เรน เพนก้อน",
            //                     characterNameCN: "-",
            //                     characterDescriptionTH: "(คำอธิบาย)",
            //                     characterDescriptionEN: "(description)",
            //                     characterDescriptionCN: "(描述)",
            //                     hasImage: true,
            //                     hasThumbnail: false,
            //                     imageCount: 1
            //                 },
            //                 {
            //                     characterName: "Ellie Starf",
            //                     characterNameTH: "เอลลี่ สตาร์ฟ",
            //                     characterNameCN: "-",
            //                     characterDescriptionTH: "(คำอธิบาย)",
            //                     characterDescriptionEN: "(description)",
            //                     characterDescriptionCN: "(描述)",
            //                     hasImage: true,
            //                     hasThumbnail: false,
            //                     imageCount: 1
            //                 },
            //             ]
            //         },
            //     ]
            // },
            {
                storyName: "Dragon Ice Interactive Corp",
                teamList: [{
                        teamName: "Dragon Ice Bubble",
                        memberList: [{
                                characterName: "Glacier Ice Dragon",
                                characterNameTH: "กราเซีย ไอซ์ ดราก้อน",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากเกม Dragon Ice Bubble</li>
                                    <li>ปัจจุบันเกมถูกนำออกจากสโตร์เนื่องจากไม่ได้อัพเดดเวอร์ชั่นให้ซัพพอร์ต 64 bit</li>
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
                                characterName: "Messe Human",
                                characterNameTH: "เมสซี่ ฮิวแมน",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากเกม Dragon Ice Bubble</li>
                                    <li>ปัจจุบันเกมถูกนำออกจากสโตร์เนื่องจากไม่ได้อัพเดดเวอร์ชั่นให้ซัพพอร์ต 64 bit</li>
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
                                characterName: "Alpaca Cat",
                                characterNameTH: "อัลปาก้า แคท",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากเกม Dragon Ice Bubble</li>
                                    <li>ปัจจุบันเกมถูกนำออกจากสโตร์เนื่องจากไม่ได้อัพเดดเวอร์ชั่นให้ซัพพอร์ต 64 bit</li>
                                </ul>
                                `,
                                characterDescriptionEN: "(description)",
                                characterDescriptionCN: "(描述)",
                                characterDescriptionCNToolTip: "คำอธิบาย",
                                hasImage: true,
                                hasThumbnail: false,
                                imageCount: 1
                            },
                            // {
                            //     characterName: "Ollie Snowman",
                            //     characterNameTH: "ออลลี่ สโนว์แมน",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Golem",
                            //     characterNameTH: "โกเล็ม",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                            // {
                            //     characterName: "Snow Queen Anthea",
                            //     characterNameTH: "ราชินีหิมะแอนเทีย",
                            //     characterNameCN: "-",
                            //     characterDescriptionTH: "(คำอธิบาย)",
                            //     characterDescriptionEN: "(description)",
                            //     characterDescriptionCN: "(描述)",
                            //     hasImage: true,
                            //     hasThumbnail: false,
                            //     imageCount: 1
                            // },
                        ]
                    },
                    {
                        teamName: "Error Identification",
                        memberList: [{
                            characterName: "MarkII Cat",
                            characterNameTH: "มาร์คทู แคท",
                            characterNameCN: "-",
                            characterDescriptionTH: `
                            <div class="text-success">
                                <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                            </div>
                            <ul>
                                <li>ตัวละครจากเกม Error Identification</li>
                                <li><a href="https://shinoyakame.github.io/erroridentificationweb/">เล่นเกมบน web ที่นี่</a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.DragonIceInteractive.ErrorIdentification">เล่นเกมบน mobile ที่นี่</a></li>
                            </ul>
                            `,
                            characterDescriptionEN: "(description)",
                            characterDescriptionCN: "(描述)",
                            characterDescriptionCNToolTip: "คำอธิบาย",
                            hasImage: true,
                            hasThumbnail: false,
                            imageCount: 1
                        }, ]
                    },
                    {
                        teamName: "Inheritor of RA",
                        memberList: [{
                                characterName: "Anubis Jackal",
                                characterNameTH: "อนูบิส แจ็คกัล",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากรายวิชาประวัติศาสตร์เพื่อการออกแบบเกม</li>
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
                                characterName: "Bastet Cat",
                                characterNameTH: "บาสเตต แคท",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากรายวิชาประวัติศาสตร์เพื่อการออกแบบเกม</li>
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
                                characterName: "Horus Hawk",
                                characterNameTH: "ฮอรัส ฮอค",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากรายวิชาประวัติศาสตร์เพื่อการออกแบบเกม</li>
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
                                characterName: "Sobek Crocodile",
                                characterNameTH: "โซเบค คร็อกโคไดล์",
                                characterNameCN: "-",
                                characterDescriptionTH: `
                                <div class="text-success">
                                    <h6 class="fw-bold">ข้อมูลตัวละครเบื้องต้น</h6>
                                </div>
                                <ul>
                                    <li>ตัวละครจากรายวิชาประวัติศาสตร์เพื่อการออกแบบเกม</li>
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
                var imageUrl = 'img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName;
                if (index > 0) {
                    imageUrl += '_' + index.toString();
                }
                var pngPath = imageUrl + '.png';
                return pngPath;
            } else {
                return 'img/no_image.png';
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
                var imageUrl = 'img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName;
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
        getCharacterNameTooltip: function(){
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            if(this.selectedLanguage == "CN" && member.characterNameCNToolTip != undefined){
                return member.characterNameCNToolTip;
            }else{
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
        getCharacterDescriptionTooltip: function(){
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            if(this.selectedLanguage == "CN" && member.characterDescriptionCNToolTip != undefined){
                return member.characterDescriptionCNToolTip;
            }else{
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