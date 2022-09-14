function Edit() {
  return (
    <div className="list-group list-group-flush bg-transparent w-50 overflow-auto">
      <form>
        <div className="mb-3 overflow-auto bg-transparent">
          <label htmlFor="exampleInputPassword1" className="form-label">Название</label>
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Имя" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Электронная почта" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Пароль" />
          <input className="form-control bg-transparent rounded-0 my-3 text-reset" id="formFileSm" type="file" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Instagram" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Телефон" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Вконтакте" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Жанр" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Жанр для поиска" />
          <input type="text" className="form-control bg-transparent rounded-0 my-3" id="exampleInputPassword1" placeholder="Краткое описание" />

          <button type="submit" className="btn bg-transparent rounded-0 my-3 text-reset">Добавить</button>
        </div>
      </form>

      <hr />
    </div>
  );
}

export default Edit;
