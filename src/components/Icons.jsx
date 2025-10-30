// Re-export lucide-react icons so components that import from './Icons' keep working.
import {
  Truck,
  BarChart2,
  Map,
  MessageCircle,
  Phone,
  Check,
  Rocket,
  AlertTriangle,
  DollarSign,
  FileText,
} from 'lucide-react'

const baseClass = "w-6 h-6"

export const TruckIcon = (props) => <Truck className={baseClass} {...props} />
export const DashboardIcon = (props) => <BarChart2 className={baseClass} {...props} />
export const RouteIcon = (props) => <Map className={baseClass} {...props} />
export const ChatIcon = (props) => <MessageCircle className={baseClass} {...props} />
export const PhoneIcon = (props) => <Phone className={baseClass} {...props} />
export const CheckIcon = (props) => <Check className={baseClass} {...props} />
export const RocketIcon = (props) => <Rocket className={baseClass} {...props} />
export const AlertIcon = (props) => <AlertTriangle className={baseClass} {...props} />
export const MoneyIcon = (props) => <DollarSign className={baseClass} {...props} />
export const DocumentIcon = (props) => <FileText className={baseClass} {...props} />