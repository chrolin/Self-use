#!name=流媒体解锁检测
#!desc=信息面板
#!system=ios
# 更新日期：2022.06.26
# 版本：2.2

[Panel]
stream-all = script-name=stream-all, title="流媒体解锁检测", content="请刷新面板", update-interval=3600

[Script]
stream-all = type=generic, timeout=15, script-path=https://raw.githubusercontent.com/Rabbit-Spec/Surge/Master/Module/Panel/Stream-All/Moore/Stream-All.js
