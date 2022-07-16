module.exports = {
  types: [
    {
      value: 'fix',
      name: 'fix: 优化或修复bug',
    },
    {
      value: 'feat',
      name: 'feat: 新增功能',
    },
    {
      value: 'api',
      name: 'api: 修改接口',
    },
    {
      value: 'update',
      name: 'update: 代码打包提交',
    },
    {
      value: 'build',
      name: 'build: 变更项目构建或外部依赖',
    },
    {
      value: 'perf',
      name: 'perf:  性能优化',
    },
    {
      value: 'docs',
      name: 'docs: 文档变更',
    },
    {
      value: 'revert',
      name: 'revert: 代码回退',
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构',
    },
    {
      value: 'test',
      name: 'test: 添加测试',
    },
  ],
  messages: {
    type: '选择一种你期望的提交类型(type):',
    // scope: '选择一个更改的范围(scope) (可选):',
    // used if allowCustomScopes is true
    // customScope: 'Denote the SCOPE of this change:',
    subject: '输入本次commit记录说明:\n',
    // body: '长说明，使用"|"换行(可选)：\n',
    // breaking: '非兼容性说明 (可选):\n',
    // footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },
  skipQuestions: ['scope', 'body', 'breaking', 'footer'],
  allowBreakingChanges: [
    'fix',
    'feat',
    'update',
    'refactor',
    'perf',
    'build',
    'revert',
    'api',
    'refactor',
  ],
  subjectLimit: 100,
};
