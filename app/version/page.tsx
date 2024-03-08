import Image from 'next/image';
import style from '@/app/util.module.css';

export default function Version() {
  return (
    <div className={style.cyousei}>
      <p>本アプリは出欠管理アプリ(欠席特化型)となっております。</p>
      <p>授業回数を入力すると自動的に1/3の欠席回数が残りとして表示されます。</p>
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
        <p>落単...?</p>
        <p>と変化します。</p>
      </div>
      <p>決してギリギリまで休んでいいわけではないのでご注意を！</p>
    </div>
  );
}
