// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Circle extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getChildByName('btn').on('click', this.loadRemoteImg, this);
    }

    start () {

    }

    loadRemoteImg(){
        let sUrl = "https://appupdate.gamepind.com/2022/08/74d2ca2d83e407751d705bb5886d1f0a.png";
        cc.loader.load(sUrl, (err, tex:cc.Texture2D)=>{
            if (err) {
                cc.log(err);
            }else{
                // tex.width = 100;
                // tex.height = 100;
                tex.packable = false;
                this.img.spriteFrame = new cc.SpriteFrame(tex);
            }
        })
    }

    // update (dt) {}
}
