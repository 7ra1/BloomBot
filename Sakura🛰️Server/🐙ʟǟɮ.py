import platform
import psutil
import os
my_system = platform.uname()
print('⬡==========================⬡    🍹 ֆǟӄʊʀǟ™ 🍹    ⬡==========================⬡')
# print(f'🍹𝐒𝐲𝐬𝐭𝐞𝐦: {my_system.system}')
# print(f'🍹𝐍𝐨𝐝𝐞 𝐍𝐚𝐦𝐞: {my_system.node}')
# print(f'🍹𝐑𝐞𝐥𝐞𝐚𝐬𝐞: {my_system.release}')
# print(f'🍹𝐕𝐞𝐫𝐬𝐢𝐨𝐧: {my_system.version}')
# print(f'🍹𝐌𝐚𝐜𝐡𝐢𝐧𝐞: {my_system.machine}')
# print(f'🍹𝐌𝐞𝐦𝐨𝐫𝐲: {psutil.virtual_memory()}')
# print(f'🍹𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐨𝐫: {my_system.processor}')
if os.path.exists('Sakura🛰️Server/Coolist.json'):
    os.remove('Sakura🛰️Server/Coolist.json')
    print('Cooljson.json -rm done!')
else:
    pass
os.system('touch Sakura🛰️Server/Coolist.json')
os.system('node Sakura🛰️Server/touched.js')
os.system('node Sakura☣️Reactor/🍹ֆǟӄʊʀǟ™.js')
