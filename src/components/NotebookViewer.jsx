import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import notebookData from '../assets/fx_carry_analysis.json';

const NotebookViewer = () => {
    const [cells, setCells] = useState([]);

    useEffect(() => {
        if (notebookData && notebookData.cells) {
            setCells(notebookData.cells);
        }
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">FX Carry Trade Analysis</h1>
                <p className="text-gray-400">
                    A technical case study analyzing Foreign Exchange Carry Strategies using data from 2000-2025.
                </p>
            </div>

            <div className="space-y-8">
                {cells.map((cell, index) => {
                    if (cell.cell_type === 'markdown') {
                        return (
                            <div key={index} className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary-400">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
                                </ReactMarkdown>
                            </div>
                        );
                    } else if (cell.cell_type === 'code') {
                        return (
                            <div key={index} className="rounded-lg overflow-hidden border border-dark-border bg-dark-card">
                                <div className="bg-dark-bg px-4 py-2 text-xs text-gray-500 border-b border-dark-border font-mono">
                                    In [{cell.execution_count || ' '}]:
                                </div>
                                <div className="p-4 overflow-x-auto">
                                    <SyntaxHighlighter
                                        language="python"
                                        style={vscDarkPlus}
                                        customStyle={{ background: 'transparent', padding: 0 }}
                                    >
                                        {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
                                    </SyntaxHighlighter>
                                </div>
                                {cell.outputs && cell.outputs.length > 0 && (
                                    <div className="border-t border-dark-border bg-black/30 p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                                        {cell.outputs.map((output, i) => (
                                            <div key={i}>
                                                {output.text && (
                                                    <pre className="whitespace-pre-wrap">{Array.isArray(output.text) ? output.text.join('') : output.text}</pre>
                                                )}
                                                {output.data && output.data['text/plain'] && (
                                                    <pre className="whitespace-pre-wrap">{Array.isArray(output.data['text/plain']) ? output.data['text/plain'].join('') : output.data['text/plain']}</pre>
                                                )}
                                                {/* Handle images if present (base64) */}
                                                {output.data && output.data['image/png'] && (
                                                    <img
                                                        src={`data:image/png;base64,${output.data['image/png']}`}
                                                        alt="Output plot"
                                                        className="max-w-full h-auto mt-2 rounded"
                                                    />
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
