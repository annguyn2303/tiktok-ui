import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/337531533_750330729810374_4850798925550414916_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x2BCK7dQ7HsAX-JroJD&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfCfW72BFWZ7TRAMtOmSUqQmIGt0_jMdLwFMEl7XxLqqCg&oe=64A739A4" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        Nguyen Truong An
                    </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>annguyn2303</span>
            </div>
        </div>
    );
}

export default AccountItem;