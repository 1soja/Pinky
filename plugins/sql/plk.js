const _0x56b118=_0x6dfe;(function(_0xc9f07a,_0x5db4ba){const _0x4998aa=_0x6dfe,_0x522dbf=_0xc9f07a();while(!![]){try{const _0x48a142=parseInt(_0x4998aa(0xb4))/0x1+-parseInt(_0x4998aa(0xad))/0x2+-parseInt(_0x4998aa(0xaf))/0x3*(-parseInt(_0x4998aa(0xb9))/0x4)+-parseInt(_0x4998aa(0xb7))/0x5+-parseInt(_0x4998aa(0xb6))/0x6*(-parseInt(_0x4998aa(0xae))/0x7)+-parseInt(_0x4998aa(0xaa))/0x8*(-parseInt(_0x4998aa(0xb8))/0x9)+parseInt(_0x4998aa(0xb0))/0xa*(-parseInt(_0x4998aa(0xab))/0xb);if(_0x48a142===_0x5db4ba)break;else _0x522dbf['push'](_0x522dbf['shift']());}catch(_0x1cb334){_0x522dbf['push'](_0x522dbf['shift']());}}}(_0x211f,0x44d3e));function _0x211f(){const _0x17cfc0=['notes','define','540971OyFjhp','create','6lFDiRx','73305pxkHak','747TFxsEk','38924ajNdpg','50608kqWjqZ','492371WfpFAr','sequelize','111458KKispM','1774514EfWpIZ','33ANWSkX','240HcJdPf','exports'];_0x211f=function(){return _0x17cfc0;};return _0x211f();}const config=require('../../conf'+'ig'),{DataTypes}=require(_0x56b118(0xac)),plkDB=config['DATABASE'][_0x56b118(0xb3)](_0x56b118(0xb2),{'note':{'type':DataTypes['TEXT'],'allowNull':![]}});async function getplk(){const _0x57d4b5=await plkDB['findAll']();return _0x57d4b5;}function _0x6dfe(_0x172ca2,_0x21a71e){const _0x211f06=_0x211f();return _0x6dfe=function(_0x6dfee4,_0x37598e){_0x6dfee4=_0x6dfee4-0xaa;let _0x377221=_0x211f06[_0x6dfee4];return _0x377221;},_0x6dfe(_0x172ca2,_0x21a71e);}async function saveplk(_0x395c7c){const _0x3d0034=_0x56b118;return await plkDB[_0x3d0034(0xb5)]({'note':_0x395c7c});}async function deleteplk(){return await plkDB['destroy']({'where':{},'truncate':!![]});}module[_0x56b118(0xb1)]={'plkDB':plkDB,'getplk':getplk,'saveplk':saveplk,'deleteplk':deleteplk};
