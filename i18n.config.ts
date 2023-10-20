export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      'search-job': 'Search Job Title',
      'apply-job': 'Apply Now',
      'qna':{
        'title': 'Job QnA',
        'description': 'Ask Question and Get Answers from Employer about this job post',
      },
    },
    ms: {
      'search-job': 'Cari Tajuk Pekerjaan',
      'apply-job': 'Mohon',
      'qna':{
        'title': 'Soal Jawab Jawatan',
        'description': 'Tanya soalan dan majikan akan menjawab tentang jawatan ini',
      },
    }
  }
}))
