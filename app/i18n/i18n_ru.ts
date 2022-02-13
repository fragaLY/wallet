import { LocalizationSchema, PrepareSchema } from "./schema";

const schema: PrepareSchema<LocalizationSchema, '_0' | '_1' | '_2'> = {
    lang: 'ru',
    common: {
        and: 'и',
        accept: 'Принимаю',
        start: 'Начать',
        continue: 'Продолжить',
        continueAnyway: 'Продолжить все равно',
        back: 'Назад',
        logout: 'Выйти',
        cancel: 'Отменить',
        balance: 'Баланс',
        walletAddress: 'Адрес кошелька',
        copy: 'Скопировать',
        copied: 'Скопировано в буфер обмена',
        share: 'Поделиться',
        send: 'Отправить',
        yes: 'Да',
        no: 'Нет',
        amount: 'Количество',
        today: 'Сегодня',
        yesterday: 'Вчера'
    },
    home: {
        wallet: 'Кошелек',
        settings: 'Настройки'
    },
    settings: {
        title: 'Настройки',
        backupKeys: 'Сохранить секретные ключи',
        migrateOldWallets: 'Перенос старых кошельков',
        termsOfService: 'Условия использования',
        privacyPolicy: 'Политика конфиденциальности',
        developerTools: 'Инструменты разработчика'
    },
    wallet: {
        sync: 'Синхронизация кошелька',
        balanceTitle: 'Баланс Ton',
        actions: {
            receive: 'получить',
            send: 'отправить'
        },
        empty: {
            message: 'Увас нет транзакций',
            receive: 'Получить TON'
        }
    },
    receive: {
        title: 'Получить Ton',
        subtitle: 'Поделитесь данной ссылкой, чтобы получить Ton',
        share: {
            title: 'My Tonhub Address'
        }
    },
    transfer: {
        title: 'Отправить Ton',
        titleAction: 'Действие',
        confirm: 'Вы уверены что хотите продолжить?',
        error: {
            invalidAddress: 'Неверный адрес',
            invalidAmount: 'Неверное количество',
            sendingToYourself: 'Вы не можете отправлять монеты сами себе',
            zeroCoins: 'К сожалению, вы не можете отправить ноль монет',
            notEnoughCoins: 'К сожалению, на кошельке не достаточно монет для совершения транзакции',
            addressIsForTestnet: 'Этот адрес для тестовой сети',
            addressCantReceive: 'Этот адрес не может принимать монеты',
            addressIsNotActive: 'Этот адрес не активен'
        },
        sendAll: 'отправить все',
        scanQR: 'считать QR код',
        sendTo: 'Получатель',
        fee: 'Комиссия сети: {{fee}}',
        purpose: 'Цель транзакции',
        comment: 'Сообщение получателю (необязательное)'
    },
    migrate: {
        title: 'Перенос старых кошельков',
        subtitle: 'Если вы пользовались устаревшими кошельками вы можете автоматически перевести все ваши средства со старых адресов.',
        inProgress: 'Перенос старых кошельков...',
        transfer: 'Переводим монеты с адреса {{address}}',
        check: 'Проверяем адрес {{address}}'
    },
    tx: {
        sending: 'Отправка #{{id}}',
        sent: 'Отправлено #{{id}}',
        received: 'Получено'
    },
    txPreview: {
        sendAgain: 'повторить',
        blockchainFee: 'Комиссия сети'
    },
    qr: {
        title: 'Отсканируйте QR-код',
        requestingPermission: 'Запрашиваем доступ к камере...',
        noPermission: 'Нет доступа к камере'
    },
    products: {
        oldWallets: {
            title: 'Старые кошельки',
            subtitle: 'Нажмите что бы перенести кошельки'
        }
    },
    welcome: {
        title: 'Tonhub',
        titleDev: 'Ton Development Wallet',
        subtitle: 'Простой и безопасный кошелек для TON',
        subtitleDev: 'Кошелек для разработчиков',
        createWallet: 'Создать кошелек',
        importWallet: 'Импортировать кошелек'
    },
    legal: {
        title: 'Правовая информация',
        subtitle: 'Пожалуйста, примите нашу',
        privacyPolicy: 'политику конфиденциальности',
        termsOfService: 'условия использования'
    },
    create: {
        inProgress: 'Создаем...'
    },
    import: {
        title: '24 Секретных слова',
        subtitle: 'Пожалуйста, восстановите доступ к вашему кошельку, введя 24 секретных слова, которые вы записали при создании кошелька.'
    },
    secure: {
        title: 'Защитите свой кошелек',
        titleUnprotected: 'Ваше устройство не защищено',
        subtitle: 'Мы используем биометрию для подтверждения транзакций что бы быть уверенными что никто кроме вас не сможет перевести ваши монеты.',
        subtitleUnprotected: 'Настоятельно рекомендуется включить пароль на вашем устройстве для защиты ваших активов.',
        protectFaceID: 'Защитить с Face ID',
        protectTouchID: 'Защитить с Touch ID',
        protectBiometrics: 'Защитить с биометрией',
        protectPasscode: 'Защитить паролем'
    },
    backup: {
        title: 'Фраза восстановления',
        subtitle: 'Запишите эти 24 слова в указанном ниже порядке и сохраните их в секретном, надежном месте.'
    },
    backupIntro: {
        title: 'Создайте резервную копию',
        subtitle: 'На следующем шаге вы увидите 24 секретных слова, позволяющих восстановить кошелек.',
        clause1: 'Если я потеряю фразу восстановления, мои средства будут потеряны навсегда.',
        clause2: 'Если я раскрою или передам кому-либо свою фразу восстановления, мои средства могут быть украдены.',
        clause3: 'Я несу полную ответственность за сохранность моей фразы восстановления.'
    },
    errors: {
        incorrectWords: {
            title: 'Неверная фраза',
            message: 'Вы ввели неправильные секретные слова. Пожалуйста, проверьте ввод и попробуйте еще раз.'
        },
        secureStorageError: {
            title: 'Secure storage error',
            message: 'Unfortunatelly we are unable to save data. Please, restart your phone.'
        }
    },
    confirm: {
        logout: {
            title: 'Вы уверены что хотите выйти?',
            message: 'Вы собираетесь отключить кошелек от этого приложения. Вы сможете восстановить свой кошелек, используя свои 24 секретных слова, или импортировать другой кошелек.'
        }
    }
};

export default schema;