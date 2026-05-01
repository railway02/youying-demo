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
    title: '不是贴纸',
    body: '把照片里的空位，变成朋友能回应的位置。',
  },
  {
    id: 'image',
    state: STATES.IMAGE_SENT,
    label: '用户发图',
    title: '群聊发图',
    body: '一句“开饭。”，一张生活图，体验从 QQ 群里自然发生。',
  },
  {
    id: 'space',
    state: STATES.AFFORDANCE_DETECTED,
    label: '留白感知',
    title: '感知留白',
    body: 'AI 只提示画面里合适的入画空间。',
  },
  {
    id: 'friend',
    state: STATES.FRIEND_CLICKED,
    label: '朋友入画',
    title: '决策动作',
    body: '朋友点击空位，选择“坐你对面”。',
  },
  {
    id: 'echo',
    state: STATES.GENERATING,
    label: 'AI 回响',
    title: '生成回响',
    body: '回应淡入原图空间，像真的坐到了对面。',
  },
  {
    id: 'pcg',
    state: STATES.ECHO_DONE,
    label: 'PCG 价值',
    title: '感知-决策-生成',
    body: '关系在 QQ 群里发生，AI 只把回应放回画面。',
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
    title: '坐你对面',
    body: '林同学的轻回应',
  },
  {
    id: 'echo',
    label: '回响图',
    title: '回响图',
    body: '不是贴纸，是空间回应',
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
