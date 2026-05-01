export const STATES = Object.freeze({
  IDLE: 'IDLE',
  IMAGE_SENT: 'IMAGE_SENT',
  AFFORDANCE_DETECTED: 'AFFORDANCE_DETECTED',
  FRIEND_CLICKED: 'FRIEND_CLICKED',
  GENERATING: 'GENERATING',
  ECHO_DONE: 'ECHO_DONE',
})

export const STATE_ORDER = [
  STATES.IDLE,
  STATES.IMAGE_SENT,
  STATES.AFFORDANCE_DETECTED,
  STATES.FRIEND_CLICKED,
  STATES.GENERATING,
  STATES.ECHO_DONE,
]

export const assets = {
  input: '/meal_input.jpg',
  echo: '/meal_echo.jpg',
  compare: '/meal_compare.jpg',
  mask: '/meal_mask.png',
}

export const judgeSteps = [
  {
    id: 'definition',
    state: STATES.IDLE,
    label: '产品定义',
    title: '有应是什么',
    body: '有应是 QQ 群聊里的 AI 视觉回应模块。用户发一张生活图，朋友点一下画面里的空位，AI 把回应自然长进画面里。',
  },
  {
    id: 'image',
    state: STATES.IMAGE_SENT,
    label: '用户发图',
    title: '先发一张图',
    body: '用户像平时一样在群里发图，不需要打开新工具。',
  },
  {
    id: 'space',
    state: STATES.AFFORDANCE_DETECTED,
    label: '留白感知',
    title: '画面出现空位',
    body: '系统只轻轻提示可入画的位置。',
  },
  {
    id: 'friend',
    state: STATES.FRIEND_CLICKED,
    label: '朋友入画',
    title: '朋友点一下',
    body: '林同学选择“坐你对面”，动作足够明确。',
  },
  {
    id: 'echo',
    state: STATES.GENERATING,
    label: 'AI 回响',
    title: '回应长进画面',
    body: 'AI 在空位局部生成回应，不改原图主体。',
  },
  {
    id: 'pcg',
    state: STATES.ECHO_DONE,
    label: 'PCG 价值',
    title: '感知-决策-生成',
    body: '先感知空位，再由朋友决策，最后生成自然回响。',
  },
]

export const compareItems = [
  {
    id: 'input',
    label: '原图',
    title: '原图',
    body: '对面留有空间',
    image: assets.input,
  },
  {
    id: 'action',
    label: '动作',
    title: '动作',
    body: '林同学「坐你对面」',
  },
  {
    id: 'echo',
    label: '回响图',
    title: '回响图',
    body: '回应自然长进画面',
    image: assets.echo,
  },
]

export const technicalEvidence = {
  perception: {
    scene: '校园生活图',
    main_subject: '用户发送的生活照片',
    interactive_space: '对面空座 / 桌面留白',
    action: '坐你对面',
    generation_strategy: '局部空间重构',
    safety: '不生成人脸，不修改原图主体',
  },
  maskLabel: '可入画空间：对面空座 / 桌面留白',
  promptSummary:
    '保持原图视角、光照、阴影、透视和手机拍摄质感，只在空位区域生成回应元素。',
}

export function getStateIndex(state) {
  return STATE_ORDER.indexOf(state)
}
