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

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getComponent(cc.Sprite).sharedMaterials[0].setProperty('width', cc.winSize.width);
        this.node.getComponent(cc.Sprite).sharedMaterials[0].setProperty('height', cc.winSize.height);
        this.node.getComponent(cc.Sprite).sharedMaterials[0].setProperty('topx', this.node.x);
        this.node.getComponent(cc.Sprite).sharedMaterials[0].setProperty('topy', this.node.y);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (ev: cc.Event.EventTouch)=>{
            // this.node.position = ev.getLocation();
            // cc.log(ev.getLocation())
            this.node.position.x = ev.getLocationX() - cc.winSize.width/2;
            this.node.position.y = ev.getLocationY() - cc.winSize.height/2;
        })
    }

    start () {

    }

    // update (dt) {}
}
