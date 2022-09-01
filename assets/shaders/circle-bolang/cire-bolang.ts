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
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;

    @property
    text: string = 'hello';

    s_time: number = 0;

    bShow: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.getChildByName('btn').on('click', this.showBolang, this);
    }

    showBolang(){
        this.bShow = false;
        this.s_time = 0;
        this.bShow = true;
    }

    update (dt) {
        if (!this.bShow) {
            return;
        }
        this.s_time += dt;
        this.img.sharedMaterials[0].setProperty('s_time', this.s_time);
    }
}
