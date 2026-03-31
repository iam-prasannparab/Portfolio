import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('exp_title')}</h2>
          <p className="text-gray-400 max-w-2xl">{t('exp_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{t('exp_prof_title')}</h3>
            </div>
            
            <div className="relative border-l border-gray-700 ml-3 pl-8 pb-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">{t('exp_job1_title')}</h4>
              <p className="text-sm text-emerald-400 mb-3">{t('exp_job1_company')}</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-400">
                <li>{t('exp_job1_desc1')}</li>
                <li>{t('exp_job1_desc2')}</li>
                <li>{t('exp_job1_desc3')}</li>
              </ul>
            </div>

            <div className="relative border-l border-gray-700 ml-3 pl-8 pb-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gray-600 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">{t('exp_job2_title')}</h4>
              <p className="text-sm text-gray-400 mb-3">{t('exp_job2_company')}</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-400">
                <li>{t('exp_job2_desc1')}</li>
                <li>{t('exp_job2_desc2')}</li>
                <li>{t('exp_job2_desc3')}</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{t('exp_edu_title')}</h3>
            </div>
            
            <div className="relative border-l border-gray-700 ml-3 pl-8 pb-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">{t('exp_edu1_title')}</h4>
              <p className="text-sm text-gray-400 mb-3">{t('exp_edu1_school')}</p>
              <p className="text-sm text-gray-400">
                {t('exp_edu1_desc')}
              </p>
            </div>

            <div className="relative border-l border-gray-700 ml-3 pl-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gray-600 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">{t('exp_edu2_title')}</h4>
              <p className="text-sm text-gray-400 mb-3">{t('exp_edu2_school')}</p>
              <p className="text-sm text-gray-400">
                {t('exp_edu2_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
