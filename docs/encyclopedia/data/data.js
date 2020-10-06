new Vue({
    el : "#vue-app",
    data : {
        selectedStory : 0,
        selectedTeam : 0,
        selectedMember : 0,
        selectedStoryText : "",
        selectedTeamText : "",
        selectedMemberText : "",
        storyList : [
            {
                storyName : "Animalwars Series",
                teamList : [
                    {
                        teamName : "Animalwars Team",
                        memberList : [
                            {
                                characterName : "Cycle Dog",
                                characterNameTH : "ไซเคิล ด็อก",
                                characterNameCN : "雷期 (เหลยชี)",
                                characterDescriptionTH : "หัวหน้าเวปอนมาสเตอร์รุ่นที่ 4 และรองหัวหน้าทีม ไซเคิลเป็นหลานของวีรบุรุษเซอคิท ผู้กอบกู้โลกจากคิงโครโนดราก้อน ราชามังกรปีศาจ ถุงมือวงจรเวทเป็นอาวุธในตำนานที่คุณปู่ให้ไซเคิลมา โดยไซเคิลจะต้องรวบรวมผู้พิทักษ์ทั้ง 5 คน เพื่อปลดผนึกดาบสั้น และพาเพื่อน ๆ ผ่านการทดสอบของผู้คุมโซนทั้ง 12 คน เพื่อปลดล็อคอาวุธในตำนานที่ทรงพลังที่สุด",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ray Tortoise",
                                characterNameTH : "เรย์ ทอทัซ",
                                characterNameCN : "光龙 (กวางหลง)",
                                characterDescriptionTH : "หัวหน้าทีมอะนิมมอลวอร์ ฉายา 'วิหคแห่งแสง' และ 'มังกรน้อย' ใช้เวทแสงในการต่อสู้",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ray Tortoise (Demon Form)",
                                characterNameTH : "เรย์ ทอทัซ (ร่างปีศาจ)",
                                characterNameCN : "光龙",
                                characterDescriptionTH : "ร่างปีศาจในนิยายจะเรียกว่า 'มังกรแฝงร่าง' ใช้ได้เฉพาะกลุ่มเซเว่นวอนเดอร์",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ray Tortoise (Dragon Form)",
                                characterNameTH : "เรย์ ทอทัซ (ร่างมังกร)",
                                characterNameCN : "光龙",
                                characterDescriptionTH : "ร่างหลังจากทำพิธีสืบทอดทายาทมังกร เรย์ใช้ร่างนี้ในการต่อสู้กับคิงโครโนดราก้อน ในนิยายยังไม่ปรากฏ",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Sky Hawk",
                                characterNameTH : "สกาย ฮอค",
                                characterNameCN : "-",
                                characterDescriptionTH : "พ่อครัวประจำทีม ใช้ธาตุเหล็กเป็นหลัก โจมตีทางกายภาพ",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Frost Polarbear",
                                characterNameTH : "ฟรอสท์ โพลาร์แบร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "ผู้ใช้อาวุธต้องคำสาป 'ดาบมังกรดำ' ใช้ธาตุมืดและน้ำแข็ง สามารถจับจิตสังหารได้",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Knuckle Owl",
                                characterNameTH : "นัคเคิล อาล",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพื่อนสมัยเด็กของเรย์ ใช้ธาตุมืดเป็นหลัก",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Knuckle Owl (Teenage)",
                                characterNameTH : "นัคเคิล อาล (ตอนโต)",
                                characterNameCN : "-",
                                characterDescriptionTH : "ปรากฏตัวในนิยาย Animalwars Series x Detective Company",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Nill Cat",
                                characterNameTH : "นิล แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "ลูกสาวของวาดอร์ แอบชอบเรย์",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chimon Tortoise",
                                characterNameTH : "ชิม่อน ทอทัซ",
                                characterNameCN : "-",
                                characterDescriptionTH : "น้องชายคนเล็กของเรย์",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Saito Dog",
                                characterNameTH : "ไซโต ด็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "ผู้คุมโซนพิสเซส มีหน้าที่ทดสอบและดูแลไซเคิล",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chelonia Turtle",
                                characterNameTH : "คีโลเนีย เทอร์เทิล",
                                characterNameCN : "-",
                                characterDescriptionTH : "ผู้คุมโซนแอเรียส มีหน้าที่ดูแลและทดสอบสกาย",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chelonia Turtle (Golgol Form)",
                                characterNameTH : "คีโลเนีย เทอร์เทิล (ร่างกอลกอล)",
                                characterNameCN : "-",
                                characterDescriptionTH : "กอลกอลเป็นเพ็ทของคีโลเนีย ที่อยู่ในรูปแบบเวทมนตร์ ไม่ใช่พันธะสัญญาเหมือนคนอื่น",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Sarada Polarbear",
                                characterNameTH : "ซาราดะ โพลาร์แบร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "เสนาธิการคนสนิทของคีโลเนีย",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Phiral Penguin",
                                characterNameTH : "ฟิรอล เพนกวิน",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของไซเคิล",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Weremon Wolf",
                                characterNameTH : "เวม่อน วูล์ฟ",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของฟรอสท์ สมุนของคิงโครโนดราก้อนหมายเลข 1",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Alex Rat",
                                characterNameTH : "อเล็กซ์ แรท",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของนิล",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chika Mole",
                                characterNameTH : "ชิก้า โมล์",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของนัคเคิล (ปัจจุบันยังไม่ทำพันธะสัญญา)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Beo Basilisk",
                                characterNameTH : "เบโอ บาซิลลิสค์",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของเรย์",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Signal Hedgehog",
                                characterNameTH : "ซิกนอล เฮดจ์ฮ็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของสกาย",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Zuri Sparrow",
                                characterNameTH : "ซูริ สแปโรว์",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของชิม่อน",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Atomic Team",
                        memberList : [
                            {
                                characterName : "Champion Rabbit",
                                characterNameTH : "แชมเปี้ยน แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "เจ้าชายมาเฟีย",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Sabi Rat",
                                characterNameTH : "ซาบี้ แรท",
                                characterNameCN : "-",
                                characterDescriptionTH : "เสนาธิการของคีโลเนีย น้องสาวของเวิร์ค และคู่หูของแชมเปี้ยน",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Neon Furret",
                                characterNameTH : "นีออน เฟอร์เรต",
                                characterNameCN : "-",
                                characterDescriptionTH : "เวปอนมาสเตอร์คนที่ 13",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Remedy Rabbit",
                                characterNameTH : "เรเมดี้ แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "พี่สาวของฟีล",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Shelter Bull",
                                characterNameTH : "เชลท์เตอร์ บูล",
                                characterNameCN : "-",
                                characterDescriptionTH : "น้องชายบุญธรรมของไกอา บูล ซึ่งปัจจุบันกลายเป็นเสนาธิการของคีโลเนีย",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Radow Magpie",
                                characterNameTH : "เรโดว์ แมกไพ",
                                characterNameCN : "-",
                                characterDescriptionTH : "พี่ชายต่างสายเลือดของสนิคเคอร์",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Black Rabbit",
                                characterNameTH : "แบล็ค แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "หัวหน้าหน่วยอารักขาของเรเมดี้",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "White Rabbit",
                                characterNameTH : "ไวท์ แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "รองหัวหน้าหน่วยอารักขาของเรเมดี้",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Rildo Rabbit",
                                characterNameTH : "ริลโด้ แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "ทหารยามบ๊อง ๆ ของเพียว ชอบสูดกัญชา เป็นคนส่งสาร",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Beaker Laboratory",
                        memberList : [
                            {
                                characterName : "Beaker Cat",
                                characterNameTH : "บีเกอร์ แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Illus Fish",
                                characterNameTH : "อิลลัส ฟิช",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Rose Hawk",
                                characterNameTH : "โรส ฮอค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Blue Rose",
                        memberList : [
                            {
                                characterName : "Uka Camel",
                                characterNameTH : "อูก้า คาเมล",
                                characterNameCN : "-",
                                characterDescriptionTH : "ตัวประกอบบันเทิง",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Agu Girrafe",
                                characterNameTH : "อากู๋ ยีราฟ",
                                characterNameCN : "-",
                                characterDescriptionTH : "ตัวประกอบบันเทิง",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Uke Monkey",
                                characterNameTH : "อูกี๋ มังกี้",
                                characterNameCN : "-",
                                characterDescriptionTH : "ตัวประกอบบันเทิง",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Egae Gecko",
                                characterNameTH : "อีแก่ เกคโค่",
                                characterNameCN : "-",
                                characterDescriptionTH : "ตัวประกอบบันเทิง",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Chelonia Empire",
                        memberList : [
                            {
                                characterName : "Mother Cat",
                                characterNameTH : "มาเธอร์ แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Elemental Dog",
                                characterNameTH : "เอเลเมนทอล ด็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "ร่างมืดของไซเคิล",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "King Chronodragon",
                                characterNameTH : "คิงโครโนดราก้อน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Gaia Bull",
                                characterNameTH : "ไกอา บูล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Dusk Tortoise",
                                characterNameTH : "ดัสค์ ทอทัซ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Dusk Tortoise (Demon Form)",
                                characterNameTH : "ดัสค์ ทอทัซ (ร่างปีศาจ)",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Curse Squad Team",
                        memberList : [
                            {
                                characterName : "Undead Seal",
                                characterNameTH : "อันเดด ซีล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Snicker Magpie",
                                characterNameTH : "สนิคเคอร์ แมกไพ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ghost Loris",
                                characterNameTH : "โกสต์ โลริส",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Tox Bat",
                                characterNameTH : "ท็อกซ์ แบท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Cherry Woodpecker",
                                characterNameTH : "เชอร์รี่ วู้ดเพกเกอร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "D Alternate",
                        memberList : [
                            {
                                characterName : "King Quantum",
                                characterNameTH : "คิงควอนตัม",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ion Human",
                                characterNameTH : "ไอออน ฮิวแมน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Detective Company",
                        memberList : [
                            {
                                characterName : "Phoenix",
                                characterNameTH : "ฟินิกซ์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Hunter",
                                characterNameTH : "ฮันเตอร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Executioner Angels",
                        memberList : [
                            {
                                characterName : "Pure Otter",
                                characterNameTH : "เพียว ออตเตอร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Lighter Fox",
                                characterNameTH : "ไลท์เตอร์ ฟ็อกซ์",
                                characterNameCN : "狐亮 (หูเลี่ยง)",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Pride Fox",
                                characterNameTH : "ไพรด์ ฟ็อกซ์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Gelix Raccoon",
                                characterNameTH : "เกลิกซ์ แรคคูน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Sloth Goat",
                                characterNameTH : "สลอธ โกท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Luna Chick",
                                characterNameTH : "ลูน่า ชิค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Goldy Seal",
                                characterNameTH : "โกลดี้ ซีล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Flanky Otter",
                                characterNameTH : "แฟลงกี้ ออตเตอร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Shadowman Dog",
                                characterNameTH : "ชาโดว์แมน ด็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Envy Dragon",
                                characterNameTH : "เอนวี่ ดราก้อน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Furabute Furret",
                                characterNameTH : "ฟุราบุเตะ เฟอร์เร็ต",
                                characterNameCN : "-",
                                characterDescriptionTH : "สมุนปัญญาประดิษฐ์ของไลท์เตอร์",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Gravity Island",
                        memberList : [
                            {
                                characterName : "Elibom Hawk",
                                characterNameTH : "เอลิบอม ฮอค",
                                characterNameCN : "-",
                                characterDescriptionTH : "เขาเป็นอินทรีที่เติบโตมาในตระกูคฮอค คุณปู่ของสกายเก็บเอลิบอมได้ และตั้งชื่อย้อนตัวละครคำว่าโมบาย (Mobile) ซึ่งเป็นชื่อของโมบาย อีเกิ้ล (Mobile Eagle) พ่อที่แท้จริงของเอลิบอม ที่ตายไปแล้วตั้งแต่เอลิบอมยังเด็ก",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Elibom Hawk (Mobile Eagle Form)",
                                characterNameTH : "เอลิบอม ฮอค (ร่างโมบาย อีเกิ้ล)",
                                characterNameCN : "-",
                                characterDescriptionTH : "เอลิบอมใช้ร่างนี้ต่อสู้กับทีมแอนิมมอลวอร์ที่มีสมาชิก 6 คน ใน SS2",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Crune Panther",
                                characterNameTH : "ครูน แพนเทอร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Grid Monkey",
                                characterNameTH : "กริด มังกี้",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Impact Beetle",
                                characterNameTH : "อิมแพค บีเทิ้ล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Hero Past",
                        memberList : [
                            {
                                characterName : "Diamond Dog",
                                characterNameTH : "ไดม่อน ด็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Bullet Tortoise",
                                characterNameTH : "บูลเล็ท ทอทัซ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Paper Owl",
                                characterNameTH : "เปเปอร์ อาล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Kr.Junior Team",
                        memberList : [
                            {
                                characterName : "Bruno Fox",
                                characterNameTH : "บรูโน่ ฟ็อกซ์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chen Dog",
                                characterNameTH : "เชน ด็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Orgey Pig",
                                characterNameTH : "ออร์เกย์ พิก",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Jolly Elephant",
                                characterNameTH : "โจลี่ เอเลแฟนท์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Flame Cat",
                                characterNameTH : "เฟลม แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Feel Rabbit",
                                characterNameTH : "ฟีล แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ore Panda",
                                characterNameTH : "โอ แพนด้า",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Sica Frog",
                                characterNameTH : "ซิคา ฟร็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "เพ็ทของเชน",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Magmawars Team",
                        memberList : [
                            {
                                characterName : "Magma Lion",
                                characterNameTH : "แมกม่า ไลอ้อน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Verk Rat",
                                characterNameTH : "เวิร์ค แรท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Dream Sheep",
                                characterNameTH : "ดรีม ชีพ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Kyle Duck",
                                characterNameTH : "ไคล์ ดัค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chimone Chimera (Demon Form)",
                                characterNameTH : "คีโมน ไคมีร่า (ร่างปีศาจ)",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Mighty Spear Team",
                        memberList : [
                            {
                                characterName : "Sune Monkey",
                                characterNameTH : "ซุน มังกี้",
                                characterNameCN : "孙火 (ซุนหวอ)",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Crimson Beetle",
                                characterNameTH : "คริมซัน บีเทิล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Malee Squirrel",
                                characterNameTH : "มาลี สเควอเรล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Zero Redpanda",
                                characterNameTH : "ซีโร่ เรดแพนด้า",
                                characterNameCN : "零堕 (หลิงตั้ว)",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Zero Redpanda (Teenage)",
                                characterNameTH : "ซีโร่ เรดแพนด้า (ตอนโต)",
                                characterNameCN : "零堕",
                                characterDescriptionTH : "ปรากฏตัวในนิยาย Animalwars Series x Detective Company",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Mawmaw Termite",
                                characterNameTH : "มาวมาว เทอร์ไมท์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Wing Butterfly",
                                characterNameTH : "วิง บัทเทอร์ไฟล์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Midmid Ant",
                                characterNameTH : "มิดมิด แอนท์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Phenia Phoenix",
                                characterNameTH : "ฟีเนีย ฟินิกซ์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Rebellion Team",
                        memberList : [
                            {
                                characterName : "Leno Wolf",
                                characterNameTH : "เลโน่ วูล์ฟ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Chipper Chick",
                                characterNameTH : "ชิปเปอร์ ชิค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Sand Dust Battle",
                        memberList : [
                            {
                                characterName : "Gana Squirrel",
                                characterNameTH : "กาน่า สเควอเรล",
                                characterNameCN : "-",
                                characterDescriptionTH : "แม่ของมาลี ถูกไคมีร่าสังหาร",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Livo Squirrel",
                                characterNameTH : "ลิโว้ สเควอเรล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Shamant Squirrel",
                                characterNameTH : "ชามานท์ สเควอเรล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Square Academy",
                        memberList : [
                            {
                                characterName : "Sharp Wolf",
                                characterNameTH : "ชาร์ป วูล์ฟ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Spark Dog",
                                characterNameTH : "สปาร์ค ด็อก",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Bronze Deer",
                                characterNameTH : "บรอนซ์ เดียร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Rod Polarbear",
                                characterNameTH : "ร็อด โพลาร์แบร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Zephyr Hawk",
                                characterNameTH : "เซฟเฟอร์ ฮอค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Jewel Hawk",
                                characterNameTH : "จูเอล ฮอค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Cargo Sheep",
                                characterNameTH : "คาร์โก้ ชีพ",
                                characterNameCN : "-",
                                characterDescriptionTH : "พ่อของดรีม พ่อค้าขายของชำประจำเมืองสแควร์ เสียชีวิตที่นครลอยฟ้า",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Vador Laboratory",
                        memberList : [
                            {
                                characterName : "Beastking Tortoise",
                                characterNameTH : "บีสค์คิง ทอทัซ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Beastking Tortoise (Dragon Form)",
                                characterNameTH : "บีสค์คิง ทอทัซ (ร่างมังกร)",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Vador Cat",
                                characterNameTH : "วาดอร์ แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Vador Cat (Demon Form)",
                                characterNameTH : "วาดอร์ แคท (ร่างปีศาจ)",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Music Cat",
                                characterNameTH : "มิวสิค แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Punchz Cat",
                                characterNameTH : "พันซ์ แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "World Government",
                        memberList : [
                            {
                                characterName : "Hades Rabbit",
                                characterNameTH : "เฮดิส แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Apollo Rabbit",
                                characterNameTH : "อะพอลโล แรบบิท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Shining Cheetah",
                                characterNameTH : "ไชน์นิ่ง ชีต้าร์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Shiro Sparrow",
                                characterNameTH : "ชิโร่ สแปโรว์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            }
                        ]
                    }
                ]
            },
            {
                storyName : "Penguin Detective",
                teamList : [
                    {
                        teamName : "Antagonists",
                        memberList : [
                            {
                                characterName : "Devi Squidron",
                                characterNameTH : "ดีไว สควิดรอน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Protagonists",
                        memberList : [
                            {
                                characterName : "Rein Pengon",
                                characterNameTH : "เรน เพนก้อน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ellie Starf",
                                characterNameTH : "เอลลี่ สตาร์ฟ",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                ]
            },
            {
                storyName : "Dragon Ice Interactive Corp",
                teamList : [
                    {
                        teamName : "Dragon Ice Bubble",
                        memberList : [
                            {
                                characterName : "Glacier Ice Dragon",
                                characterNameTH : "กราเซีย ไอซ์ ดราก้อน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Messe Human",
                                characterNameTH : "เมสซี่ ฮิวแมน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Alpaca Cat",
                                characterNameTH : "อัลปาก้า แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Ollie Snowman",
                                characterNameTH : "ออลลี่ สโนว์แมน",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Golem",
                                characterNameTH : "โกเล็ม",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Snow Queen Anthea",
                                characterNameTH : "ราชินีหิมะแอนเทีย",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Error Identification",
                        memberList : [
                            {
                                characterName : "MarkII Cat",
                                characterNameTH : "มาร์คทู แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                    {
                        teamName : "Inheritor of RA",
                        memberList : [
                            {
                                characterName : "Anubis Jackal",
                                characterNameTH : "อนูบิส แจ็คกัล",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Bastet Cat",
                                characterNameTH : "บาสเตต แคท",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Horus Hawk",
                                characterNameTH : "ฮอรัส ฮอค",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                            {
                                characterName : "Sobek Crocodile",
                                characterNameTH : "โซเบค คร็อกโคไดล์",
                                characterNameCN : "-",
                                characterDescriptionTH : "(คำอธิบาย)",
                                characterDescriptionEN : "(description)",
                                characterDescriptionCN : "(描述)"
                            },
                        ]
                    },
                ]
            }
        ]
    },
    methods : {
        update : function(){
            this.selectedStoryText = this.storyList[this.selectedStory].storyName;
            this.selectedTeamText = this.storyList[this.selectedStory].teamList[this.selectedTeam].teamName;
            this.selectedMemberText = this.storyList[this.selectedStory].teamList[this.selectedTeam].memberList[this.selectedMember].characterName;
        },
        updateStory : function(index){
            this.selectedStory = index;
            this.selectedTeam = 0;
            this.selectedMember = 0;
            this.update();
        },
        updateTeam : function(index){
            this.selectedTeam = index;
            this.selectedMember = 0;
            this.update();
        },
        updateMember : function(index){
            this.selectedMember = index;
        },
        getImagePath : function(){
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            var pngPath = 'img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName + '.png';
            return pngPath;
        },
        getImagePathJPG : function(event){
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            var jpgPath = 'img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName + '.jpg';
            event.target.src = jpgPath;
        },
        getThumbnailPath : function(){
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            var pngPath = 'img/character/' + story.storyName + '/' + team.teamName + '/' + member.characterName + '_thumb.png';
            return pngPath;
        },
        getThumbnailPathError : function(event){
            var story = this.storyList[this.selectedStory];
            var team = story.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            var jpgPath = 'img/character/Animalwars Series/Executioner Angels/Lighter Fox_thumb.png';
            event.target.src = jpgPath;
        }
    },
    beforeMount(){
        this.update();
    }
});