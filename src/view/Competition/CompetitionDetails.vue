<template>
  <div id="CompetitionDetails">
  <Header></Header>
  <Banner></Banner>
    <div class="container">
      <!--顶部-->
      <el-breadcrumb separator-class="el-icon-arrow-right navigationIcons">
        <img class="navigationIcon" src="@/assets/img/navigationIcon.png" alt="">
        <el-breadcrumb-item :to="{ path: '/Competition' }">最新赛事</el-breadcrumb-item>
        <el-breadcrumb-item>赛事详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!--内容-->
      <div class="content">
        <!--内容 left-->
        <div class="content-left col-lg-10 col-md-8 col-xs-12">
          <!--内容 left_top-->
          <div class="content-leftTop">
            <div class="print"></div>
              <!--标题-->
              <div class="caption">
                <div class="headline">大师赛-上海·阳光路亚基地（第一场）</div>
                <span class="gameOne">官方赛</span>
                <div class="team">渔界竞钓官方团队</div>
                <div class="date">2020-11-11  11:11:11</div>
              </div>
              <!--中间内容-->
              <div class="matter">
                <div class="matter-left">
                  <span class="typeface">比赛地点：某某大团镇徐邵路</span>
                  <span class="typeface">联系方式：12345678900</span>
                  <span class="redness">报名时间：<span class="typeface">2020.10-2020.11</span></span>
                </div>
                <div class="matter-left">
                  <span class="typeface">限制报名人数：<span>50</span></span>
                  <span class="typeface">主办方：渔界竞钓</span>
                  <span class="redness">比赛时间：<span class="typeface">2020.10-2020.11</span></span>
                </div>
                <div class="matter-left">
                  <span class="typeface">钓法：<span>路亚</span></span>
                  <span class="typeface">协办方：<span>上海阳光路亚基地</span></span>
                  <span class="typeface">报名费：<span class="redness">￥500</span></span>
                </div>
              </div>
              <!--底部内容-->
              <img class="bonus" src="@/assets/img/bonus.png" alt="">
              <img class="apply" src="@/assets/img/apply.png" alt="">
          </div>
          <!--内容 left_bottom-->
          <div class="content-leftBottom">
            <!--赛事说明-->
            <div class="substance">
              <div class="head">赛事说明</div>
              <div class="content-matter"> 渔界竞钓官方路亚城市基地大师赛(资格选拔赛)共计40场2000人参与，由10余家路亚基地承办，每场取前20名获得晋级半决赛资格，每场第1名直接晋级决赛。</div>
              <div class="content-redness">报名费:￥500元</div>
              <div class="content-redness">报名即送￥300元练杆现金抵用券</div>
              <div class="content-matter">伴手礼:超钓精品饵(雀舌米洛、水燕铅笔、霹雳虾)、市川精品钩(CT5、 720、TG1)、KN95口罩两盒、 赛事手册、赛事品牌定制遮阳帽、50元三平路亚淘宝店铺商品抵用券。</div>
              <div class="content-matter">赛事保险:本次赛事由华夏保险提供。</div>
              <div class="striping"></div>
            </div>
            <!--奖项设置-->
            <div class="awards">
              <div class="head">奖项设置</div>
              <span> 第1名: 价值6000元品牌路亚装备</span>                   
              <span> 第2名: 价值3000元品牌路亚装备</span>                         
              <span>第3名: 价值2000元品牌路亚装备</span>   
              <span>第04-20名: 价值1000元品牌路亚装备</span>          
              <span>第01-10名: 半决赛报名现金抵用券2000元</span>   
              <span>第11-20名: 半决赛报名现金抵用券1000元</span> 
              <span>注:路亚品牌装备为赛事组委会指定精选装备，获奖钓手可自由组合选择奖金内任意装备。</span> 
              <div class="content-matter">赛事最终解释权归合肥一渔一翁信息科技有限公司所有</div> 
              <div class="striping"></div>
            </div>
            <!--竞赛须知-->
            <div class="competition">
              <div class="head">竞赛须知</div>
              <p>1、遵从国家法律、法规及社会道德准则，</p>
              <p>2、公平公正的进行比赛，安全第一，成为更加有修养的选手。</p>
              <p>3、遵守社会秩序，遵从举办地风俗以及各个比赛制定的章程。</p>
              <p>4、参赛人员年龄需在18周岁以上，如未满18周岁需监护人授权或    陪同参赛。</p>
              <p>5、赛前选手须自行进行身体检查，确保身体状况能胜任比赛强度。</p>
              <p>6、凡参加本次活动者，均视为具有完全行为能力人，鉴于户外竞技 钓鱼活动存在不可控性的意外风险，赛事组织方不对非活动组织原因所致的个人意外事故负责任；参与者必须自行评估本次活动存在的个人意外事故的客观因素，风险自负。</p>
              <div class="striping"></div>
            </div>
            <!--自然保护的原则-->
            <div class="competition">
              <div class="head">自然保护的原则</div>
              <p>1、比赛过程中禁止乱扔垃圾，所产生的垃圾应妥善处理，比赛结束后集中处置，钓鱼爱好者有义务保护水资源。禁止使用污染性的材料以免污染水质。</p>
              <p>2、参赛选手需使用环保钓具，不得故意将鱼线、钩子等遗弃水中。</p>
              <p>3、在钓鱼过程中需保护场地内植被，不得故意破坏场地内树木、芦苇等植物，违者将按违规处罚条例进行处罚。保护鱼类及动物，不得故意伤害及虐待。违者取消比赛资格。</p>
              <p>4、比赛钓场在开赛前1天禁钓，所有直接到达钓场的钓友只能在观摩区休息准备，不得私自试钓，-经发现取消比赛资格。</p>
              <p>5、选手有义务配合采访，选手当场比赛肖像权归组委会所有。</p>
              <div class="striping"></div>
            </div>
            <!--赛事规则-->
            <div class="competition">
              <div class="head">赛事规则</div>
              <p>1、钓手签到抽签进场，选定位置后，比赛正式开始前20分钟，裁判检查各类装备，如发现违规情况，将予以处罚。比赛时间内的前30分钟不能移动位置，比赛时间30分钟后等待裁判通知后才可以移动钓位。</p>
              <p>2、为避免影响他人作钓，更换钓位时需在其他钓手身后3米范围以外走动。</p>
              <p>3、本次赛事为积分制，以积分记录成绩。中鱼后举手示意裁判，需正口上岸，且助裁拍照确认，手抛入水后为有效鱼，死亡鱼获为无效鱼。</p>
              <p>4、作钓过程仅可一人操作，禁止他人帮忙遛鱼、抄鱼。需自带抄网等作钓工具，禁止相互传递。出于自然保护的原则，作钓过程中使用控鱼器总成绩扣除5分。</p>
              <p>5、不得恶意侧向抛投，如有恶意违规者可向助理裁判或直接就近向纪律裁判进行投诉，由裁判判定后进行判罚。比赛期间选手需保证良好的身体状态，禁止饮酒及服用兴奋剂，选手需保证身体状态可以安全完成比赛，如不能者禁止参加比赛。</p>
              <p>6、选手作钓间距不得小于3米，具体以现场钓位标志范围为准。</p>
              <p>7、任何人不得在自身非作钓区域内放置任何物品占位，如恶意占位，抢位裁判可进行处罚。比赛不可迟到、早退，迟到30分钟内总成绩扣除2分，超过30分钟以及早退者直接取消比赛资格。</p>
              <p>8、本次比赛为淡水路亚比赛，选手必须使用标准路亚装备(路亚竿、渔轮、路亚饵等)。</p>
              <p>9、比赛中只能使用标准拟饵(软饵、硬饵、亮片及其他配件、不可使用活饵、粉饵、阿拉巴马钓组等)。作钓期间，每人只允许一-根竿子下水作钓。</p>
              <p>10、提倡文明钓鱼比赛，严禁弄虚作假、冒名顶替，以及任何形式的作弊行为，违者取消其参赛资格，情节严重者报警处理。</p>
              <p>11、参赛选手中鱼时，相临钓手不得故意缠绕或干扰。严禁换人、冒名顶替，违者取消比赛资格。</p>
              <div class="striping"></div>
            </div>
            <!--举报制度-->
            <div class="competition">
              <div class="head">举报制度</div>
              <p>1、任何人都有义务对违规行为举报，发现违规应立即举报，成绩公布后举报无效。</p>
              <p>2、参赛选手需完全尊重裁判的裁决，裁判有义务向参赛选手出示裁决依据，但不接受二次裁决或者申诉复议等要求。</p>
              <div class="striping"></div>
            </div>
            <!--其他事宜-->
            <div class="competition">
              <div class="head">其他事宜</div>
              <p>1、比赛前期如因恶劣天气或其他不可抗力因素导致的天气或环境异常，本次大赛组委会有权力延期或取消比赛。</p>
              <p>2、比赛开赛后如遇到暴雨雷电等恶劣天气，裁判长有权决定中止比赛，并以结束比赛时的即时成绩作为本次比赛的最终成绩(开赛后
              到终止比赛在二小时以上者，则本场次成绩有效)。</p>
              <p>3、若有其他未尽事宜，主办方有本次比赛的最终解释权。</p>
              <div class="striping"></div>
            </div>
            <!--温馨提示-->
            <div class="competition">
              <div class="head">温馨提示</div>
              <p>赛事一旦报名成功，选手需遵守赛事组委会一切安排之规定，如不参赛视为弃权，报名费不再退还，请谨慎选择赛事场次。</p>
              <div class="striping"></div>
            </div>
            <!--积分对应表-->
            <div class="competition">
              <div class="head">积分对应表</div>
              <p>
赛事一旦报名成功，选手需遵守赛事组委会一切安排之规定，如不参赛视为弃权，报名费不再退还，请谨慎选择赛事场次。</p>
              <div class="striping"></div>
            </div>
          </div>
        </div>
        <!--内容 right-->
        <div class="content-right col-lg-3 col-md-4 col-xs-12">
          <!--内容 right_top 赛事-->
          <div class="contRight_top">
            <!--标题-->
            <div class="corner"></div>
            <span class="designation">赛事</span>
            <!--内容-->
            <div style="display: flex;flex-direction: column;">
              <div class="list">
                <div style="width:102px">2020路亚官方赛 合肥星河分赛</div>
                <div style="width:70px">2020-12-11 12:00</div>
                <div>未开始</div>
              </div>   
            </div>
            <!---->
            <div style="display: flex;flex-direction: column;">
              <div class="list">
                <div style="width:102px">2020路亚官方赛 合肥星河分赛</div>
                <div style="width:70px">2020-12-11 12:00</div>
                <div>报名中</div>
              </div>   
            </div>
            
            <!--刷新-->
            <div class="refresh">换一换</div>
          </div>
          <!--内容 right_cont 相关推荐-->
          <div class="contRight_cont">
            <!--标题-->
            <div class="corner"></div>
            <span class="designation">相关推荐</span>
            <!--内容-->
            <div style="display: flex;flex-direction: row;">
              <div class="picture"><img src="" alt=""></div>
              <p class="topic">关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整,关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了最新更,改和调整关于对最新赛事的规定以下做了最新更改和调整关于对最新赛事的规定以下做了。最新更改和调整关于对最新赛事的规定以下做了最新更改和调整。</p>
            </div>
            <div class="time">2020-11-11  11:11:11</div> 
            <!--刷新-->
            <div class=" refresh refresh_cont">换一换</div>
          </div>
          <!--内容 right_bottom 赛事排名-->
          <div class="contRight_bottom">
            <!--标题-->
            <div class="corner"></div>
            <span class="designation">赛事排名</span>
            <!--内容-->
            <div style="display: flex;flex-direction: column;">
              <div class="list">
                <img class="medal" src="@/assets/img/golden.png" alt="">
                <div class="mess">210</div>
                <div class="mess">王先生</div>
              </div>
              <div class="list">
                <img class="medal" src="@/assets/img/golden.png" alt="">
                <div class="mess">210</div>
                <div class="mess">王先生</div>
              </div>
              <div class="ranking" @click="goRanking">查看排名》</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
export default {
    name: 'CompetitionDetails',
    components: { Banner },
    data(){
        return{
         
        }
    },
    mounted(){

    },
    methods:{
      //查看排名
    goRanking(){
      this.$router.push({path:'/CompetitionRanking'})
    }
    }

}
</script>

<style scoped>
#CompetitionDetails{
  background: #f5f5f5;
}
  /**顶部 */
  /**navigationIcon */
  .navigationIcon{
    float: left;
    margin-right: 1%;
    margin-top: -2px;
  }
  /**面包屑 */
  /deep/ .el-breadcrumb{
    margin-top: -7%;
    margin-bottom: 4%;
  }
  /deep/ .el-breadcrumb__inner{
    color: #6C98FE !important;
    font-size: 500 !important;
  }
  /deep/ .navigationIcons:before{
    background-image: url("../../assets/img/navigationBoult.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
@media (min-width: 1200px){
  /**内容 */
  .content{
    display: flex;
    flex-direction: row;
  }
  /**内容 left */
  .content-lef{
    display: flex;
    flex-direction: column;
  }
  /**内容 left top */
  .content-leftTop{
    width: 900px;
    height: 948px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    padding: 37px 33px;
  }
  /**图片 */
  .print{
    width: 833px;
    height: 272px;
    background: #f5f5f5;
  }
  /**标题 */
  .caption{
    display: flex;
    flex-direction: row;
    margin-top: 32px;
  }
  .headline{   
    font-size: 24px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
  }
  .gameOne{ 
    font-size: 14px;
    font-family: PingFang SC;
    color: #759EFE;
    border: 1px solid #759EFE;   
    border-radius: 4px;
    width: 54px; height: 28px;
    line-height: 28px;
    text-align: center;
    margin-top: 4px;
  }
  .team{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 90px;
    margin-top: 8px;
  }
  .date{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #C6C6C6;
    margin-left: 18px;
    margin-top: 8px;
  }
  /**中间内容 */
  .matter{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .matter-left{
    display: flex;
    flex-direction: column;
  }
  .typeface{   
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 24px;
  }
  .redness{    
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #CC0000;
    margin-top: 24px;
  }
  /**底部内容 */
  .bonus{
    margin-top: 26px;
  }
  .apply{
    margin: 0 auto;
    margin-top: -8%;
  }
  /**内容 left bottom */
  .content-leftBottom{
    width: 900px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 13px;
    margin-bottom: 26%;
    padding: 34px 44px;
  }
  /**赛事说明 */
  .head{   
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    color: #333333;
    font-weight: 600;
    margin-bottom: 23px;
  }
  .content-matter{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
    line-height: 22px;
  }
  .content-redness{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #CC0000;
    line-height: 22px;
  }
  .striping{  
    height: 1px;
    background: #F0F0F0;
    margin-top: 28px;
    margin-bottom: 26px;
  }
  /**奖项设置 */
  .awards span{
    margin-right: 64px;
    line-height: 22px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
  }
  /**竞赛须知 */
  .competition p{
    line-height: 22px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
    margin-top: -14px;
  }
  /**内容 right */
    /**right_top */
  .contRight_top{
    width: 285px;
    height: 420px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    padding: 30px 18px;
  }
  /**标题 */
  .corner{
    width: 3px;
    height: 17px;
    background: #527FE7;
    display: inline-block;
  }
  .designation{ 
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
    padding-left: 4px;
  }
  /**内容 */
  .list{
    justify-content: space-between;
    display: flex;flex-direction: row;
    margin-top: 27px;
    border-bottom:1px solid #F0F0F0;
  }
  .list div{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    margin-bottom: 18px;
    text-align: center;
  }
  /**刷新 */
  .refresh{
    width: 252px;
    height: 32px;
    background: #ECECEC;
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #A9A9A9;
    text-align: center;
    line-height: 32px;
  }
  /**right_cont */
  .picture{
    width: 108px;
    height: 66px;
    background: #f5f5f5;
    margin-top: 19px;
    margin-bottom: 11px;
  }
  .topic{    
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 19px;
    height: 34px; width: 53%;
    margin-left: 7px;
    line-height: 18px;
  }
  .time{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 48%;
    margin-top: -11%;
    margin-bottom: 18px;
  }
  .contRight_cont{
    width: 285px;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 30px 18px;
  }
  /**刷新 */
  .refresh_bottom{
    position: relative;
    top: 68%;
    bottom: 0;
  }
  /**right_bottom */
  .contRight_bottom{
    width: 285px;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 30px 18px;
  }
  .medal{
    height: 36px;
  }
  .mess{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    line-height: 36px;
  }
  /**排名 */
  .ranking{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #B5B5B5;
    margin: 20px auto;
    cursor: pointer;
  }
}
/** */
@media (min-width: 993px) and (max-width: 1200px){
  /**内容 */
  .content{
    display: flex;
    flex-direction: row;
  }
  /**内容 left */
  .content-lef{
    display: flex;
    flex-direction: column;
  }
  /**内容 left top */
  .content-leftTop{
    width: 100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    padding: 20px;
  }
  /**图片 */
  .print{
    width: 100%;
    height: 272px;
    background: #f5f5f5;
  }
  /**标题 */
  .caption{
    display: flex;
    flex-direction: row;
    margin-top: 32px;
  }
  .headline{   
    font-size: 22px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
  }
  .gameOne{ 
    font-size: 14px;
    font-family: PingFang SC;
    color: #759EFE;
    border: 1px solid #759EFE;   
    border-radius: 4px;
    width: 66px; height: 28px;
    line-height: 28px;
    text-align: center;
    margin-top: 2px;
  }
  .team{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 12px;
    margin-top: 8px;
    text-align: center;
  }
  .date{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #C6C6C6;
    margin-left: 18px;
    margin-top: 8px;
    text-align: center;
  }
  /**中间内容 */
  .matter{
    display: flex;
    flex-direction: column;
  }
  .matter-left{
    display: flex;
    flex-direction: column;
  }
  .typeface{   
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 24px;
  }
  .redness{    
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #CC0000;
    margin-top: 24px;
  }
  /**底部内容 */
  .bonus{
    margin-top: 26px;
    width: 100%;
  }
  .apply{
    margin: 0 auto;
    margin-top: -8%;
  }
  /**内容 left bottom */
  .content-leftBottom{
    width: 100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 13px;
    margin-bottom: 26%;
    padding: 20px;
  }
  /**赛事说明 */
  .head{   
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    color: #333333;
    font-weight: 600;
    margin-bottom: 23px;
  }
  .content-matter{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
    line-height: 22px;
  }
  .content-redness{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #CC0000;
    line-height: 22px;
  }
  .striping{  
    height: 1px;
    background: #F0F0F0;
    margin-top: 28px;
    margin-bottom: 26px;
  }
  /**奖项设置 */
  .awards span{
    margin-right: 64px;
    line-height: 22px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
  }
  /**竞赛须知 */
  .competition p{
    line-height: 22px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
    margin-top: -14px;
  }
  /**内容 right */
    /**right_top */
  .contRight_top{
    width: 285px;
    height: 420px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    padding: 30px 18px;
  }
  /**标题 */
  .corner{
    width: 3px;
    height: 17px;
    background: #527FE7;
    display: inline-block;
  }
  .designation{ 
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
    padding-left: 4px;
  }
  /**内容 */
  .list{
    justify-content: space-between;
    display: flex;flex-direction: row;
    margin-top: 27px;
    border-bottom:1px solid #F0F0F0;
  }
  .list div{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    margin-bottom: 18px;
    text-align: center;
  }
  /**刷新 */
  .refresh{
    width: 252px;
    height: 32px;
    background: #ECECEC;
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #A9A9A9;
    text-align: center;
    line-height: 32px;
  }
  /**right_cont */
  .picture{
    width: 108px;
    height: 66px;
    background: #f5f5f5;
    margin-top: 19px;
    margin-bottom: 11px;
  }
  .topic{    
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 19px;
    height: 34px; width: 53%;
    margin-left: 7px;
    line-height: 18px;
  }
  .time{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 48%;
    margin-top: -11%;
    margin-bottom: 18px;
  }
  .contRight_cont{
    width: 285px;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 30px 18px;
  }
  /**刷新 */
  .refresh_bottom{
    position: relative;
    top: 68%;
    bottom: 0;
  }
  /**right_bottom */
  .contRight_bottom{
    width: 285px;
    height: 516px;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 30px 18px;
  }
  .medal{
    height: 36px;
  }
  .mess{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    line-height: 36px;
  }
  /**排名 */
  .ranking{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #B5B5B5;
    margin: 20px auto;
    cursor: pointer;
  }
 
}
/** */
@media screen and (max-width: 992px){
  /**内容 */
  .content{
    display: flex;
    flex-direction: column;
  }
  /**内容 left */
  .content-lef{
    display: flex;
    flex-direction: column;
  }
  /**内容 left top */
  .content-leftTop{
    width: 100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    padding: 20px;
  }
  /**图片 */
  .print{
    width: 100%;
    height: 272px;
    background: #f5f5f5;
  }
  /**标题 */
  .caption{
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }
  .headline{   
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
  }
  .gameOne{ 
    font-size: 14px;
    font-family: PingFang SC;
    color: #759EFE;
    border: 1px solid #759EFE;   
    border-radius: 4px;
    width: 66px;
    text-align: center;
    margin-top: -23px;
    margin-left: 40px;
  }
  .team{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: -59%;
    margin-top: 8px;
    text-align: center;
  }
  .date{ 
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #C6C6C6;
    margin-left: 128px;
    margin-top: -19px;
    text-align: center;
  }
  /**中间内容 */
  .matter{
    display: flex;
    flex-direction: column;
  }
  .matter-left{
    display: flex;
    flex-direction: column;
  }
  .typeface{   
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-top: 4px;
  }
  .redness{    
    font-size: 16px;
    font-family: Alibaba PuHuiTi;
    color: #CC0000;
    margin-top: 24px;
  }
  /**底部内容 */
  .bonus{
    margin-top: 26px;
    width: 100%;
  }
  .apply{
    margin: 0 auto;
    margin-top: -8%;
    width: 100%;
  }
  /**内容 left bottom */
  .content-leftBottom{
    width: 100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 13px;
    margin-bottom: 8%;
    padding: 20px;
  }
  /**赛事说明 */
  .head{   
    font-size: 18px;
    font-family: Alibaba PuHuiTi;
    color: #333333;
    font-weight: 600;
    margin-bottom: 23px;
  }
  .content-matter{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
    line-height: 22px;
  }
  .content-redness{
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #CC0000;
    line-height: 22px;
  }
  .striping{  
    height: 1px;
    background: #F0F0F0;
    margin-top: 28px;
    margin-bottom: 26px;
  }
  /**奖项设置 */
  .awards span{
    margin-right: 64px;
    line-height: 22px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
  }
  /**竞赛须知 */
  .competition p{
    line-height: 22px;
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #525252;
    margin-top: -14px;
  }
  /**内容 right */
    /**right_top */
  .contRight_top{
    width: 100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    padding: 30px 18px;
  }
  /**标题 */
  .corner{
    width: 3px;
    height: 17px;
    background: #527FE7;
    display: inline-block;
  }
  .designation{ 
    font-size: 20px;
    font-family: Alibaba PuHuiTi;
    font-weight: bold;
    color: #333333;
    padding-left: 4px;
  }
  /**内容 */
  .list{
    justify-content: space-between;
    display: flex;flex-direction: row;
    margin-top: 27px;
    border-bottom:1px solid #F0F0F0;
  }
  .list div{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    margin-bottom: 18px;
    text-align: center;
  }
  /**刷新 */
  .refresh{
    width: 252px;
    height: 32px;
    background: #ECECEC;
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #A9A9A9;
    text-align: center;
    line-height: 32px;
    margin: 0 auto;
  }
  /**right_cont */
  .picture{
    width: 108px;
    height: 66px;
    background: #f5f5f5;
    margin-top: 19px;
    margin-bottom: 11px;
  }
  .topic{    
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 19px;
    height: 34px; width: 53%;
    margin-left: 7px;
    line-height: 18px;
  }
  .time{   
    font-size: 12px;
    font-family: Alibaba PuHuiTi;
    color: #999999;
    margin-left: 48%;
    margin-top: -11%;
    margin-bottom: 18px;
  }
  .contRight_cont{
    width: 100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 30px 18px;
  }
  /**刷新 */
  .refresh_bottom{
    position: relative;
    top: 68%;
    bottom: 0;
  }
  /**right_bottom */
  .contRight_bottom{
    width:100%;
    background: #F8F8F8;
    border: 1px solid #E6E6E6;
    margin-top: 4%;
    padding: 30px 18px;
    margin-bottom: 14%;
  }
  .medal{
    height: 36px;
  }
  .mess{  
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #666666;
    line-height: 36px;
  }
  /**排名 */
  .ranking{    
    font-size: 14px;
    font-family: Alibaba PuHuiTi;
    color: #B5B5B5;
    margin: 20px auto;
  }
}

</style>