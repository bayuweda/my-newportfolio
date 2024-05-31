export default function Contact() {
  return (
    <>
      <section id="kontak" className="mt-28 p-6 mx-auto ">
        <div className="container mx-auto ">
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-96 text-center">
                <h1 className="text-white text-4xl">
                  Hubungi <span className="text-primary">saya</span>
                </h1>
                <p className="text-white font-light text-sm mt-4">
                  Punya ide project untuk dikerjakan bersama-sama? ayoo hubungi
                  saya di bawah ini!
                </p>
              </div>
              <div className="mt-4 w-full flex justify-center">
                <form className="mb-8 w-72 lg:w-full md:w-full">
                  <label className="block text-sm font-medium text-gray-600">
                    Nama:
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="mt-1 p-2 border border-sky-500 rounded-md w-full bg-inherit"
                  />

                  <label className="block mt-4 text-sm font-medium text-gray-600">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 border border-sky-500 rounded-md w-full bg-inherit"
                  />

                  <label className="block mt-4 text-sm font-medium text-gray-600">
                    Pesan:
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows="4"
                    className="mt-1 p-2 border border-sky-500 rounded-md w-full bg-inherit"
                  ></textarea>

                  <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white p-2 rounded-md w-full"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
