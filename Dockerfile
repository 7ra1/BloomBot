#===============================================================================
#🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
#===============================================================================
FROM kalilinux/kali-rolling
RUN apt update 
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install python3-pip -y && apt install -y ffmpeg opus-tools bpm-tools && apt-get install curl -y 
RUN curl -sL https://deb.nodesource.com/setup_17.x | bash -
RUN apt install nodejs -y
RUN git clone https://github.com/Krakinz/Ultron.git
RUN cd Ultron
WORKDIR /Ultron
RUN npm install 
RUN touch ~/.hushlogin
CMD node ULTƦON⚡™.js
#===============================================================================
#🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
#===============================================================================