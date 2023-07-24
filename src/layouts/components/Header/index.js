import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faPlus,
    faBookmark,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import img8 from '~/assets/photos/pic-8.jpg';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'France',
                },
                {
                    type: 'language',
                    code: 'ita',
                    title: 'Italy',
                },
                {
                    type: 'language',
                    code: 'thai',
                    title: 'Thailand',
                },
                {
                    type: 'language',
                    code: 'indo',
                    title: 'Indonesia',
                },
                {
                    type: 'language',
                    code: 'mal',
                    title: 'Malaysia',
                },
                {
                    type: 'language',
                    code: 'sin',
                    title: 'Singapore',
                },
                {
                    type: 'language',
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    type: 'language',
                    code: 'den',
                    title: 'Denmark',
                },
                {
                    type: 'language',
                    code: 'bra',
                    title: 'Brazil',
                },
                {
                    type: 'language',
                    code: 'jpn',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'pol',
                    title: 'Poland',
                },
                {
                    type: 'language',
                    code: 'swi',
                    title: 'SwitzerLand',
                },
                {
                    type: 'language',
                    code: 'swe',
                    title: 'Swedden',
                },
                {
                    type: 'language',
                    code: 'ner',
                    title: 'NetherLand',
                },
                {
                    type: 'language',
                    code: 'cna',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'rus',
                    title: 'Russia',
                },
                {
                    type: 'language',
                    code: 'aus',
                    title: 'Autralia',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bạn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế đội tối',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                //do sth
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@annguyn',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
            to: '/bookmark',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                outline
                                className="upload"
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn" delay={[0, 0]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" delay={[0, 0]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={img8}
                                alt="Nguyen Truong An"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
