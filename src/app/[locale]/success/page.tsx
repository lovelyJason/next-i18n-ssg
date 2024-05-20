import React from 'react'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next-intl/client'
import classnames from 'classnames'

// export const dynamic = 'force-dynamic'

const Success: React.FC = () => {
  const t = useTranslations()
  // const router = useRouter()

  const gotoShopIndex = () => {
    // router.push('/colorbang-shop')
  }

  return (
    <div
      className={classnames([
        'lg:bg-[#F9F9F9]',
        'bg-[#F8F8F8]',
        'pb-4',
      ])}
    >
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          success
        </div>
    </div>
  )
}

export default Success
