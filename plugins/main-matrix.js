function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
cmd({
  'pattern': 'dev',
  'desc': "All About The Bot & Dev",
  'category': 'fun',
  'react': '💙',
  'filename': __filename
}, async (_0x1d77c6, _0x3bc605, _0x33505d, {
  reply: _0x149ecd
}) => {
  try {
    await _0x1d77c6.sendMessage(_0x33505d.chat, {
      'image': {
        'url': "https://files.catbox.moe/lph7xd.jpg"
      },
      'caption': "  *⟣────────────⟢*\n    *[ • Developer: 🔥𝙱.𝙼.𝙱-𝚇𝙼𝙳🔥 ]*\n *⟣────────────•⟢*\n              \n      *⟣┈───────────────⟢*\n            🗂️ *REPOSITORY*\n       https://github.com/bmbxmd/B.M.B-XMD\n      \n      *⟣┈───────────────•*\n            🔗 *PROJECT NAME*\n           𝐁.𝐌.𝐁-𝐗𝐌𝐃 W.A BOT\n      \n      *⟣┈───────────────•*\n             👨‍💻 *FOLLOW MY GITHUB*\n     https://github.com/bmbxmd\n       \n      *⟣┈───────────────•*\n             🧮 *RELEASE DATE*\n            15 jun 2025 \n       \n      *⟣┈───────────────•*\n            👨‍💻 *PAIR CODE* \n      https://bmb-zqqf.onrender.com    \n      *⟣┈───────────────•*\n           🎀 *SUPPORT CHANNEL*\n      https://whatsapp.com/channel/0029VawO6hgF6sn7k3SuVU3z* \n      *⟝┈───────────────⟞*\n        *⟣────────────•⟢*\n    ".trim()
    }, {
      'quoted': _0x3bc605
    });
  } catch (_0x175db9) {
    console.error(_0x175db9);
    _0x149ecd("❌ *An error occurred while fetching the family list. Please try again.*");
  }
});
    
