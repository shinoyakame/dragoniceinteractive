new Vue({
    el : "#vue-app",
    data : {
        selectedTeam : 0,
        selectedMember : 0,
        selectedTeamText : "",
        selectedMemberText : "",
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
                ]
            },
            {
                teamName : "Atomic Team",
                memberList : [
                    {
                        characterName : "Remedy Rabbit",
                        characterNameTH : "เรเมดี้ แรบบิท",
                        characterNameCN : "-",
                        characterDescriptionTH : "(คำอธิบาย)",
                        characterDescriptionEN : "(description)",
                        characterDescriptionCN : "(描述)"
                    },
                    {
                        characterName : "Shelter Bull",
                        characterNameTH : "เชลท์เตอร์ บูล",
                        characterNameCN : "-",
                        characterDescriptionTH : "(คำอธิบาย)",
                        characterDescriptionEN : "(description)",
                        characterDescriptionCN : "(描述)"
                    },
                ]
            },
            {
                teamName : "Beaker Laboratory",
                memberList : [
                    {
                        characterName : "Illus Fish",
                        characterNameTH : "อิลลัส ฟิช",
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
                ]
            },
            {
                teamName : "Gravity Island",
                memberList : [
                    {
                        characterName : "Crune Panther",
                        characterNameTH : "ครูน แพนเทอร์",
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
                        characterName : "Zero Firefox",
                        characterNameTH : "ซีโร่ ไฟร์ฟ็อกซ์",
                        characterNameCN : "零堕 (หลิงตั้ว)",
                        characterDescriptionTH : "(คำอธิบาย)",
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
                ]
            },
            {
                teamName : "Vador Laboratory",
                memberList : [
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
            }
        ]
    },
    methods : {
        update : function(){
            this.selectedTeamText = this.teamList[this.selectedTeam].teamName;
            this.selectedMemberText = this.teamList[this.selectedTeam].memberList[this.selectedMember].characterName;
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
            var team = this.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            var pngPath = 'img/character/' + team.teamName + '/' + member.characterName + '.png';
            return pngPath;
        },
        getImagePathJPG : function(event){
            var team = this.teamList[this.selectedTeam];
            var member = team.memberList[this.selectedMember];
            var jpgPath = 'img/character/' + team.teamName + '/' + member.characterName + '.jpg';
            event.target.src = jpgPath;
        }
    },
    beforeMount(){
        this.update();
    }
});