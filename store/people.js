import { createStore } from 'pinia'

export const usePeopleStore = createStore(
  'people',
  () => ({
    list: [
      {
        id: 1,
        photo:
          'https://static.tildacdn.com/tild6237-3462-4362-b138-373133333464/photo.jpeg',
        name: 'Сергей Суровцев',
        case: `
          О задержании Сергея Суровцева Следственный комитет объявил 28 ноября. 30-летний IT-специалист, по <a href="https://zona.media/news/2019/11/28/srvtsvsk"><u>версии следствия</u></a>, «поднял секцию металлического ограждения» и ударил ей бойца Нацгвардии, а также «пытался блокировать передвижение других правоохранителей» во время акции акции 27 июля на Тверской улице.<br><br> Уже 29 ноября, через день после задержания, стало известно, что следствие по делу Суровцева <a href="https://zona.media/news/2019/11/29/surovcev-sk"><u>завершено</u></a>.<br><br>Как <a href="https://zona.media/news/2019/11/28/srvtsv"><u>отмечало</u></a> «МБХ медиа», Суровцев окончил МАИ, он стал одним из основателей проекта Shopster Analytics, регистрирующего передвижения покупателей в магазинах.
        `,
        clauses: ['318.1'],
        sessions: [1]
      },
      {
        id: 2,
        photo:
          'https://static.tildacdn.com/tild3838-6533-4561-b433-333637366266/photo.jpg',
        name: 'Самариддин Раджабов',
        case: `
          Раджабова обвиняют по части 1 статьи 318 УК (применение насилия в отношении представителя власти), со 2 августа он <a href="https://zona.media/online/2019/08/02/27jul-arest#25114"><u>находится</u></a> в под стражей. Следствие считает, что он во время акции 27 июля кинул в сторону полицейских пластиковую бутылку, которая ни в кого в итоге не попала. «Медиазона» <a href="https://zona.media/article/2019/11/11/kratkovremennoe-sostoyanie-opasnosti"><u>рассказывала</u></a>, как менялись показания потерпевших.<br><br> Суд должен был начать рассматривать дело еще 27 ноября, но судья Мария Сизинцева <a href="https://zona.media/news/2019/11/27/radzhabov"><u>вернула</u></a> его в прокуратуру — по ее мнению, обвинительное заключение составили с ошибками.<br><br> Раджабов не признает вину.
        `,
        clauses: ['318.1'],
        sessions: [1]
      }
    ]
  }),
  {
    findPerson: state => pid => state.list.find(person => person.id === pid)
  }
)
