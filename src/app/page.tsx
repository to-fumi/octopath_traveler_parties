"use client"

import Image from 'next/image';
import React, { useState } from 'react';

type TabIdentifier = 'lv1' | 'lv25' | 'lv50' | 'lv75';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabIdentifier>('lv1');
  const levels: TabIdentifier[] = ['lv1', 'lv25', 'lv50', 'lv75'];

  const switchTab = (newTab: TabIdentifier) => {
    setActiveTab(newTab);
  };

  return (
    <main>
      <div className="header">
        <p className="headerTitle">OctoHub<span className="headerSubTitle">オクトパストラベラー ~大陸の覇者~</span></p>
      </div>
      <div className="mainFrame">
        <p className="mainTitle">ボス一覧</p>
        <div className="border-b border-slate-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            {levels.map((level) => (
              <li key={level} className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === level ? 'text-slate-700 border-slate-700' : 'hover:text-slate-400 hover:border-slate-400'}`}
                  onClick={() => switchTab(level)}
                  role="tab"
                  aria-selected={activeTab === level}
                >
                  {`Lv.${level.substring(2)}~`}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="level-tab-content" className="pt-4">
          {levels.map((level) => (
            <div
              key={level}
              className={`p-4 rounded-lg ${activeTab === level ? 'bg-slate-100' : 'hidden bg-slate-50'}`}
              role="tabpanel"
              aria-labelledby={`${level}-tab`}
            >
              <p className="text-sm text-slate-500">
                This is some placeholder content for the <strong className="font-medium text-slate-900">{`${level.substring(2)} tab's associated content`}</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.
              </p>
            </div>
          ))}
        </div>

        <p className="topContent">Level Tab</p>
        <p className="topContent">Boss View</p>
        <Image
          src="/noimage.svg"
          alt="enemy.boss.icon"
          className=""
          width={ 100 }
          height={ 100 }
          priority
        />
        <p className="topContent">オクトラの写記をイメージして、作成。ボスをクリックしたら別ページで左に敵を表示し右にパーティー編成をいいね数ランキングにして表示</p>
        <p className="topContent">ボスの情報は名前とExなどのランクと弱点を表示したい。行動などの詳細は今後実装予定にしようかな</p>
        <p className="topContent">※ボスをクリックしたら、パーティー編成のいいね数ごとのランキングを昇順で表示。また自身も作成できるようにCreateを表示</p>
      </div>
    </main>
  );
}
