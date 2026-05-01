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
    title: '让回应回到画面里',
    body: '有应是 QQ 群聊里的 AI 视觉回应模块。朋友不用打字，只要用一个动作回应图片。',
  },
  {
    id: 'image',
    state: STATES.IMAGE_SENT,
    label: '用户发图',
    title: '用户自然发图',
    body: '图片先作为普通群聊消息出现，不打扰、不加标签。',
  },
  {
    id: 'space',
    state: STATES.AFFORDANCE_DETECTED,
    label: '留白感知',
    title: 'AI 后台理解画面',
    body: 'AI 在后台识别空位和可回应空间，但不把技术判断直接贴到图片上。',
  },
  {
    id: 'friend',
    state: STATES.FRIEND_CLICKED,
    label: '朋友回应',
    title: '朋友主动触发',
    body: '朋友点击图片后，才出现轻量回应动作。',
  },
  {
    id: 'echo',
    state: STATES.GENERATING,
    label: 'AI 回响',
    title: '受控空间重构',
    body: 'AI 把“坐你对面”生成成一张空间一致的回响图。',
  },
  {
    id: 'pcg',
    state: STATES.ECHO_DONE,
    label: 'PCG 价值',
    title: '回响成为新消息',
    body: '回响图作为林同学的一条新消息回到群聊，而不是覆盖原图。',
  },
]

export const compareItems = [
  {
    id: 'input',
    label: '原图',
    title: '原图',
    body: '小许发出的原始图片',
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
    body: '回应作为新消息回到群聊',
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
