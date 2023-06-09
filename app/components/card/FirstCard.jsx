import Image from "next/image";
import Img from "../../assets/1.jpg";

const FirstCard = () => {
  return (
    <div className="my-20 sm:mx-28 mx-10">
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 lg:shadow-lg flex flex-col justify-center lg:rounded w-full bg-white z-10 lg:mb-0 mb-4 lg:scale-x-110 lg:scale-y-90 scale-100 border border-slate-300">
          <h3 className="text-slate-900 font-bold text-4xl mb-8">
            الجراحات الكبري
          </h3>
          <p className="text-slate-700 leading-7">
            جراحات الجهاز الهضمى والمتمثلة فى : جراحات السمنة المفرطة ( تكميم
            المعدة وتحويل مسار الغذاء والساسي ثنائي التقسيم ) بالمنظار إصلاح فتق
            الحجاب الحاجز جراحيا أو بالمنظار - علاج ضيق المرئ بالمنظار -
            إلتهابات البنكرياس و الإنسداد المعـــوي إستئصال أورام الجهاز الهضمي
            و المعدة والقولون جراحياً أو بالمنظار - إستئصال المرارة جراحيا أو
            بالمنظار إستئصال الطحال جراحياً أو بالمنظار - مناظير المعدة و
            القولون - إستئصال أورام الغدة الدرقية و الجار درقية العميد و الخبيث
            أورام الغدة اللعابية والليمفاوية أورام الثدى الحميد و الخبيث - شد
            ترهلات البطن و نحت القوام
          </p>
        </div>
        <div className="w-full">
          <Image
            src={Img}
            alt=""
            className="object-cover object-[-60%_15%] max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
