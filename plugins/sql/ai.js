const _0x590b27=_0x24d0;(function(_0x31d2cc,_0x405eb3){const _0x54ad96=_0x24d0,_0x476b85=_0x31d2cc();while(!![]){try{const _0x571f25=parseInt(_0x54ad96(0x14a))/0x1*(parseInt(_0x54ad96(0x14f))/0x2)+-parseInt(_0x54ad96(0x143))/0x3*(parseInt(_0x54ad96(0x14b))/0x4)+-parseInt(_0x54ad96(0x144))/0x5+-parseInt(_0x54ad96(0x139))/0x6*(parseInt(_0x54ad96(0x142))/0x7)+-parseInt(_0x54ad96(0x13f))/0x8*(parseInt(_0x54ad96(0x140))/0x9)+parseInt(_0x54ad96(0x145))/0xa+-parseInt(_0x54ad96(0x14c))/0xb*(-parseInt(_0x54ad96(0x14e))/0xc);if(_0x571f25===_0x405eb3)break;else _0x476b85['push'](_0x476b85['shift']());}catch(_0x1312b4){_0x476b85['push'](_0x476b85['shift']());}}}(_0x2541,0xe065e));const config=require(_0x590b27(0x13c)+'ig'),{DataTypes}=require(_0x590b27(0x148)),AIDB=config[_0x590b27(0x151)][_0x590b27(0x14d)]('AI',{'chat':{'type':DataTypes[_0x590b27(0x146)],'allowNull':![]},'type':{'type':DataTypes[_0x590b27(0x146)],'allowNull':![]},'message':{'type':DataTypes[_0x590b27(0x147)],'allowNull':![]}});async function getAI(_0x1163d5=null,_0x553e10='pinky'){const _0x5a7dc9=_0x590b27;var _0x2dba1f=await AIDB[_0x5a7dc9(0x150)]({'where':{'chat':_0x1163d5,'type':_0x553e10}});return _0x2dba1f[_0x5a7dc9(0x13d)]<0x1?![]:_0x2dba1f[0x0][_0x5a7dc9(0x141)];}function _0x24d0(_0x3f2476,_0x40284b){const _0x2541f0=_0x2541();return _0x24d0=function(_0x24d05a,_0x5f1ca6){_0x24d05a=_0x24d05a-0x139;let _0x330ac8=_0x2541f0[_0x24d05a];return _0x330ac8;},_0x24d0(_0x3f2476,_0x40284b);}async function setAI(_0x211a09=null,_0x2012ea=_0x590b27(0x13a),_0x5e795a=null){const _0x2a5d8b=_0x590b27;var _0x17aa3a=await AIDB[_0x2a5d8b(0x150)]({'where':{'chat':_0x211a09,'type':_0x2012ea}});return _0x17aa3a[_0x2a5d8b(0x13d)]<0x1?await AIDB[_0x2a5d8b(0x13e)]({'chat':_0x211a09,'type':_0x2012ea,'message':_0x5e795a}):await _0x17aa3a[0x0][_0x2a5d8b(0x149)]({'chat':_0x211a09,'type':_0x2012ea,'message':_0x5e795a});}function _0x2541(){const _0x70e2a=['DATABASE','360948acDONi','pinky','destroy','../../conf','length','create','8sdJLbo','13060827hoidvj','dataValues','175pmSWta','81cmUFyb','8102405oPKZoK','2196760mFsaDh','STRING','TEXT','sequelize','update','1AStnHp','179560DwvfVN','11nYLFVA','define','55862196oXRazb','3663878muuqds','findAll'];_0x2541=function(){return _0x70e2a;};return _0x2541();}async function deleteAI(_0x5ddd94=null,_0x425b6e=_0x590b27(0x13a)){const _0x32ad26=_0x590b27;var _0x2f3623=await AIDB['findAll']({'where':{'chat':_0x5ddd94,'type':_0x425b6e}});return await _0x2f3623[0x0][_0x32ad26(0x13b)]();}module['exports']={'AIDB':AIDB,'getAI':getAI,'setAI':setAI,'deleteAI':deleteAI};
