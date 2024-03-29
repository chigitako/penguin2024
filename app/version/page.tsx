import Image from 'next/image';
import style from '@/app/util.module.css';

export default function Version() {
  return (
    <div className={style.cyousei}>
      <p>本アプリは出欠管理アプリ(欠席特化型)となっております。</p>
      <p>授業回数を入力すると自動的に1/3の欠席回数が残りとして表示されます。</p>
      <p>もし授業を欠席したら欠席ボタンを押してください。</p>
      <p>残りの日数が減るにつれてアイコンが</p>
      <div className={style.yoko}>
        <Image
          src="/first.svg"
          width={30}
          height={500}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <p>ガンバッテルネ！</p>
        <Image
          src="/mid.svg"
          width={30}
          height={500}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <p>チョットヤバイネ！</p>
        <Image
          src="/last.svg"
          width={30}
          height={500}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />{' '}
        <p>ラクタン...?</p>
      </div>
      <p>と変化します。</p>
      <p>リセットしたいときはResetボタンを押してください。</p>
      <p>
        決してギリギリまで休んでいいわけではないので授業には真面目に参加しましょう！
      </p>
    </div>
  );
}
