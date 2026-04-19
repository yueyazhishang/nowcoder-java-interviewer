/**
 * 牛客网Java后端面试题智能抓取工具
 * @version 2.0.0
 * @description 自动提取、分类和导出牛客网Java面试题目
 */

const fs = require('fs').promises;
const path = require('path');

class NowcoderJavaInterviewer {
    constructo) {
                grouped[category] = [];
            }
            grouped[category].push(q);
        });
        
        return grouped;
    }

    /**
     * 保存结果到文件
     */
    async saveResult(data, filename = null) {
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        const defaultFilename = `interview_${timestamp}`;
        const finalFilename = filename || defaultFilename;
        
        // 确保输出目录存在
        await fs.mkdir(this.config.outputDir, { recursive: true });
        
        // 保存JSON格式
        const jsonPath = path.join(this.config.outputDir, `${finalFilename}.json`);
        await fs.writeFile(jsonPath, JSON.stringify(data, null, 2), 'utf8');
        
        console.log(`💾 结果已保存: ${jsonPath}`);
        
        return {
            json: jsonPath,
            timestamp
        };
    }

    /**
     * 批量处理多个URL
     */
    async batchProcess(urls, options = {}) {
        console.log(`📋 开始批量处理 ${urls.length} 个页面...`);
        
        const results = [];
        
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            console.log(`\n📝 处理第 ${i + 1}/$















































