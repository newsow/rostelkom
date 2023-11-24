import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {

  return (
    <div>
    <header aria-label="Site Header" className="bg-white rounded-b-3xl p-3">
        <div
          className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-4">
            <Link to="/">
                    <img src="https://www.company.rt.ru/about/identity/files/RGB_RT_logo-horizontal_main_ru.png" className='w-40' alt="Logo" />
            </Link>
          </div>
      
          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              aria-label="Site Nav"
              className="flex gap-2 sm:gap-3 lg:text-xs font-bold lg:uppercase lg:tracking-wide text-white"
            >
              <Link
                to="/login"
                className="block text-white py-3 px-4 sm:px-8 rounded-md bg-purple-600 hover:bg-purple-800"
              >
                Войти
              </Link>
      
              <Link
                to="/registration"
                className="block text-white py-3 px-4 sm:px-8 rounded-md bg-purple-600  hover:bg-purple-800"
              >
                Регистрация
              </Link>
            </nav>
          </div>
        </div>
      </header>

        <main
  className="relative bg-[url(https://img.kvmeter.ru/upload/iblock/06e/06e1982866ddbbf5e67d7fb9273274b0.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
       Ростелеком.Ключ

        <strong className="block font-extrabold text-purple-600">
          Всегда рядом
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
        Уникальное решение, которое поможет Вам общаться со всеми вашими соседями
      </p>

      
    </div>
  </div>
</main>



    <section className="bg-white text-purple-800">
        <div
          className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Возможности платформы</h2>
      
            <p className="mt-4 text-xl font-medium text-yellow-500">
              Социальная платформа для общения жильцов
            </p>
          </div>
      
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <a
              className="block bg-purple-600 rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-white">Общение</h2>
      
              <p className="mt-1 text-sm text-white">
              Жильцы могут обмениваться сообщениями, создавать чаты и форумы для обсуждения вопросов, касающихся жизни в доме.
              </p>
            </a>
      
            <a
              className="block bg-purple-600 rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
              href="#"
            >
      
              <h2 className="mt-4 text-xl font-bold text-white">Планирование мероприятий</h2>
      
              <p className="mt-1 text-sm text-white">
              Возможность создания событий и приглашение других жильцов участвовать в общих мероприятиях, встречах и праздниках.
              </p>
            </a>
      
            <a
              className="block bg-purple-600 rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
              href="#"
            >
      
              <h2 className="mt-4 text-xl font-bold text-white">Обмен вещами и услугами</h2>
      
              <p className="mt-1 text-sm text-white">
              Площадка для размещения объявлений о продаже, обмене или предоставлении услуг между соседями.
              </p>
            </a>
      
            <a
              className="block bg-purple-600 rounded-xl border p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-800/20"
              href="#"
            >
      
              <h2 className="mt-4 text-xl font-bold text-white">Голосование за изменения</h2>
      
              <p className="mt-1 text-sm text-white">
              Возможность проведения голосований среди жильцов по вопросам управления и изменениям на придомовой территории
              </p>
            </a>
    
          </div>
        </div>
      </section>   



<footer className="bg-white border-t-2 border-purple-700">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
        <img src="https://www.company.rt.ru/about/identity/files/RGB_RT_logo-horizontal_main_ru_200x70.png" alt="" />
      </div>

      <p className="mt-4 text-center text-purple-800 text-m text-white lg:mt-0 lg:text-right">
        Copyright &copy; 2023. Все права защищены.
      </p>
    </div>
  </div>
</footer>

</div>
  )
}

export default Main;