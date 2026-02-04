module "vpc" {
  source     = "./modules/vpc"
  cidr_block = "10.0.0.0/16"
  name       = "lab16-vpc"
}

module "public_subnet" {
  source     = "./modules/subnet"
  vpc_id     = module.vpc.vpc_id
  cidr_block = "10.0.1.0/24"
  az         = "${var.aws_region}a"
  public     = true
  name       = "lab16-public-subnet"
}

module "private_subnet" {
  source     = "./modules/subnet"
  vpc_id     = module.vpc.vpc_id
  cidr_block = "10.0.2.0/24"
  az         = "${var.aws_region}a"
  public     = false
  name       = "lab16-private-subnet"
}

module "public_ec2" {
  source        = "./modules/ec2"
  ami           = var.ami
  instance_type = "t3.micro"
  subnet_id     = module.public_subnet.subnet_id
  name          = "lab16-public-ec2"
}

module "private_ec2" {
  source        = "./modules/ec2"
  ami           = var.ami
  instance_type = "t3.micro"
  subnet_id     = module.private_subnet.subnet_id
  name          = "lab16-private-ec2"
}
