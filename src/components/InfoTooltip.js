import PopupWithForm from "./PopupWithForm";
import iconErrorPath from "../styles/images/reg-icon-error.png";
import iconSuccessPath from "../styles/images/reg-icon-success.png";

function InfoTooltip(props) {
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="tooltip"
      style={{
        display: "none",
      }}
    >
      {props.isSuccess ? (
        <>
          <img
            className="popup__reg-icon"
            alt="Успешная регистрация регистрации"
            src={iconSuccessPath}
          ></img>
          <p className="popup__reg-message">Вы успешно зарегистрировались!</p>
        </>
      ) : (
        <>
          <img
            className="popup__reg-icon"
            alt="Ошибка при регистрации"
            src={iconErrorPath}
          ></img>
          <p className="popup__reg-message">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
        </>
      )}
    </PopupWithForm>
  );
}

export default InfoTooltip;
