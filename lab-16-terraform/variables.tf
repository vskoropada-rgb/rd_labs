variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "eu-central-1"
}

variable "ami" {
  type        = string
  description = "AMI for EC2 instances"
  default     = "ami-xxxxxxxxxxxxxxxxx" # тимчасово, заміниш коли буде AWS
}
