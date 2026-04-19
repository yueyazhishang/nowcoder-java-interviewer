# nowcoder-java-interviewer# 📚 牛客网Java后端面试题智能抓取工具

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)

> 自动提取、智能分类和多格式导出牛客网Java后端面试题目

## ✨ 功能特点

- 🎯 **智能抓取** - 自动提取牛客网面试题内容，支持懒加载内容展开
- 🏷️ **自动分类** - 基于关键词智能分类（Java基础、JVM、并发、框架、数据库等）
- 📊 **多格式导出** - 支持JSON、Markdown、HTML等多种格式
- 🔄 **批量处理** - 支持批量抓取多个页面并自动合并结果
- ✅ **数据验证** - 内置数据质量检查和验证机制
- 📦 **易于使用** - 简单的API设计，开箱即用

## 📋 题目分类

- **Java基础** - 语法、面向对象、集合框架等
- **JVM原理** - 内存模型、垃圾回收、类加载等
- **并发编程** - 多线程、锁机制、线程池等
- **框架相关** - Spring、SpringBoot、MyBatis等
- **数据库** - MySQL、Redis、事务、索引等
- **算法题** - 数据结构与算法
- **系统设计** - 分布式、微服务、架构设计等
- **项目经验** - 实际项目问题和解决方案

## 🚀 快速开始

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/yueyazhishang/nowcoder-java-interviewer.git
cd nowcoder-java-interviewer

# 安装依赖
npm install
```

### 基础使用

```javascript
const { NowcoderJavaInterviewer } = require('./src/main');

// 创建实例
const interviewer = new NowcoderJavaInterviewer({
    outputDir: './output',
    ocrEnabled: true
});

// 抓取单个页面
const result = await interviewer.execute('https://www.nowcoder.com/interview/center');

console.log(`抓取完成！共获取 ${result.metadata.totalQuestions} 道题目`);
```

### 批量处理

```javascript
const urls = [
    'https://www.nowcoder.com/discuss/875014532303749120',
    'https://www.nowcoder.com/discuss/874796779600998400'
];

const batchResult = await interviewer.batchProcess(urls);
console.log(`批量处理完成！共 ${batchResult.mergedResult.metadata.totalQuestions} 道题目`);
```

## 📖 使用示例

### 示例1：抓取指定公司面试题

```javascript
const interviewer = new NowcoderJavaInterviewer();

// 抓取阿里巴巴面试题
await interviewer.execute('https://www.nowcoder.com/discuss/alibaba-java-interview');
```

### 示例2：自定义配置

```javascript
const interviewer = new NowcoderJavaInterviewer({
    outputDir: './my-output',
    maxRetries: 5,
    timeout: 60000,
    ocrEnabled: true
});
```

## 📂 项目结构

```
nowcoder-java-interviewer/
├── src/
│   ├── main.js              # 主程序入口
│   ├── core/                # 核心功能模块
│   │   ├── Extractor.js     # 内容提取器
│   │   ├── Classifier.js    # 智能分类器
│   │   ├── Validator.js     # 数据验证器
│   │   └── Optimizer.js     # 性能优化器
│   └── utils/               # 工具函数
│       ├── exporters.js     # 结果导出工具
│       └── helpers.js       # 辅助函数
├── examples/                # 使用示例
├── output/                  # 输出目录
├── package.json            # 项目配置
└── README.md              # 项目说明

```

## 🔧 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `outputDir` | String | `'./output/results'` | 输出目录路径 |
| `ocrEnabled` | Boolean | `true` | 是否启用OCR图片识别 |
| `maxRetries` | Number | `3` | 最大重试次数 |
| `timeout` | Number | `30000` | 请求超时时间(ms) |

## 📊 输出格式

### JSON格式
```json
{
  "metadata": {
    "source": "牛客网",
    "totalQuestions": 50,
    "generatedAt": "2026-04-19T10:00:00.000Z"
  },
  "questions": [
    {
      "id": "Q0001",
      "title": "Java垃圾回收机制",
      "content": "...",
      "category": "jvm",
      "difficulty": "medium"
    }
  ]
}
```

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 感谢牛客网提供的优质面试题资源
- 感谢所有贡献者的支持

## 📮 联系方式

- GitHub: [@yueyazhishang](https://github.com/yueyazhishang)
- Issues: [项目Issues](https://github.com/yueyazhishang/nowcoder-java-interviewer/issues)

---

**⭐ 如果这个项目对你有帮助，请给个Star支持一下！**






























































































































