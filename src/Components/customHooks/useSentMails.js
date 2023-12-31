import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { UIshowaction } from "../Store/UIshow";
function useSentMails(email) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSentMails = async () => {
      const mail = email.replace(/[@.]/g, "");
      const link = `https://mailbox-database-2d55d-default-rtdb.firebaseio.com/${mail}/allsendmail.json`;

      const fetchData = async () => {
        console.log("called");
        try {
          let response = await axios.get(link);
          let arr = [];
          if (response.status === 200) {
            const data = response.data;
            if (data !== null && data !== undefined) {
              const keys = Object.keys(data);
              for (const key of keys) {
                let item = data[key];
                let myobj = {
                  ...item.obj,
                  id: key,
                };
                arr.push(myobj);
              }
              dispatch(UIshowaction.HidestarSend(arr));
            } else {
              console.log("response is null");
            }
          } else {
            console.log("Error:", response.data);
          }
        } catch (err) {
          console.log("Error:", err);
        }
      };

      fetchData();

    
    };

    fetchSentMails();
  }, [email, dispatch]);

  return null;
}

export default useSentMails;