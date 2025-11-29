import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import { useTheme } from '../context/ThemeContext';

const NotebookViewer = ({ notebookData, title }) => {
    const [cells, setCells] = useState([]);
    const { theme } = useTheme();

    useEffect(() => {
        if (notebookData && notebookData.cells) {
            setCells(notebookData.cells);
        }
    }, [notebookData]);

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <div className="mb-16">
                <h1 className="text-4xl font-bold mb-6 text-[var(--text-primary)]">{title}</h1>
                <p className="text-[var(--text-secondary)] text-lg">
                    A technical deep dive into the analysis and implementation details.
                </p>
            </div>

            <div className="space-y-16">
                {cells.map((cell, index) => {
                    if (cell.cell_type === 'markdown') {
                        return (
                            <div key={index} className="prose max-w-none prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-strong:text-[var(--text-primary)] prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-li:text-[var(--text-secondary)] prose-img:rounded-lg prose-img:mx-auto">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm, remarkMath]}
                                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                                >
                                    {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
                                </ReactMarkdown>
                            </div>
                        );
                    } else if (cell.cell_type === 'code') {
                        return (
                            <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card shadow-sm">
                                <div className="bg-gray-100 dark:bg-dark-bg px-4 py-3 text-xs text-[var(--text-secondary)] border-b border-gray-200 dark:border-dark-border font-mono flex justify-between items-center">
                                    <span>In [{cell.execution_count || ' '}]:</span>
                                    <span className="text-[var(--text-secondary)] text-[10px] uppercase tracking-wider">Python</span>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <SyntaxHighlighter
                                        language="python"
                                        style={theme === 'dark' ? vscDarkPlus : prism}
                                        customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
                                    >
                                        {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
                                    </SyntaxHighlighter>
                                </div>
                                {cell.outputs && cell.outputs.length > 0 && (
                                    <div className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-black/30 p-6 font-mono text-sm text-[var(--text-secondary)] overflow-x-auto">
                                        {cell.outputs.map((output, i) => (
                                            <div key={i} className="mb-2 last:mb-0">
                                                {output.text && (
                                                    <pre className="whitespace-pre-wrap">{Array.isArray(output.text) ? output.text.join('') : output.text}</pre>
                                                )}
                                                {output.data && output.data['text/plain'] && (
                                                    <pre className="whitespace-pre-wrap">{Array.isArray(output.data['text/plain']) ? output.data['text/plain'].join('') : output.data['text/plain']}</pre>
                                                )}
                                                {/* Handle images if present (base64) */}
                                                {output.data && output.data['image/png'] && (
                                                    <div className="mt-4 bg-white p-2 rounded inline-block">
                                                        <img
                                                            src={`data:image/png;base64,${output.data['image/png']}`}
                                                            alt="Output plot"
                                                            className="max-w-full h-auto rounded"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default NotebookViewer;
